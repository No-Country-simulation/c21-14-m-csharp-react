using AutoMapper;
using Brickly.DAL.Repository.Contract;
using Brickly.DTO.Obtain;
using Brickly.DTO.Register;
using Brickly.DTO.Update;
using Brickly.LOGIC.Funcions;
using Brickly.LOGIC.Services.Contract.AdminService;
using Brickly.MODEL;
using System.ComponentModel.DataAnnotations;

namespace Brickly.LOGIC.Services
{
    public class AdminService : IAdminService
    {
        private readonly IGenericRepository<Admin> repository;
        private readonly IGenericRepository<DocumentType> documentTypeRepository;
        private readonly IMapper mapper;

        public AdminService(IGenericRepository<Admin> repository,
                            IGenericRepository<DocumentType> documentTypeRepository,
                            IMapper mapper)
        {
            this.repository = repository;
            this.documentTypeRepository = documentTypeRepository;
            this.mapper = mapper;
        }

        /// <summary>
        /// Crea un nuevo administrador.
        /// </summary>
        /// <param name="adminDto"></param>
        /// <returns></returns>
        /// <exception cref="ApplicationException"></exception>
        public async Task<CreateAdminDto> CreateAdminAsync(CreateAdminDto adminDto)
        {
            try
            {
                // Validación del DTO
                var validationResults = new List<ValidationResult>();
                var validationContext = new ValidationContext(adminDto);
                bool isValid = Validator.TryValidateObject(adminDto, validationContext, validationResults, true);

                if (!isValid)
                {
                    // Lanzar una excepción con los errores de validación
                    throw new ValidationException("Por favor, corrije los siguientes errores: " + string.Join(", ", validationResults.Select(v => v.ErrorMessage)));
                }

                // Verificación de duplicados
                var existingAdmin = await repository.GetByConditionAsync(a => a.Email == adminDto.Email);
                if (existingAdmin != null)
                {
                    throw new ArgumentException("Ya existe un administrador registrado con este correo electrónico. Por favor, utiliza otro correo.");
                }

                // Obtener el tipo de documento basado en el nombre seleccionado
                var selectedDocumentType = adminDto.DocumentTypes?.FirstOrDefault(); // Asumiendo que hay al menos un tipo de documento seleccionado
                if (selectedDocumentType == null)
                {
                    throw new ArgumentException("Debes seleccionar un tipo de documento antes de continuar.");
                }

                var documentType = await documentTypeRepository.GetByConditionAsync(dt => dt.DocumentName == selectedDocumentType.DocumentName);
                if (documentType == null)
                {
                    throw new ArgumentException("El tipo de documento seleccionado no es válido. Por favor, verifica tu selección.");
                }

                // Asignar el DocumentId
                adminDto.DocumentTypeId = documentType.IdTypeDocument;

                // Encriptar la contraseña
                adminDto.Password = adminDto.Password?.EncryptPassword();


                // Lógica para crear el administrador
                var admin = mapper.Map<Admin>(adminDto);
                await repository.CreateAsync(admin);

                return mapper.Map<CreateAdminDto>(adminDto); // Devuelve el DTO creado
            }
            catch (TaskCanceledException ex)
            {
                // Mensaje específico para errores de cancelación de tareas
                throw new ApplicationException("Ocurrió un error al crear el administrador. Por favor, intente más tarde.", ex);
            }
            catch (ArgumentException ex)
            {
                // Mensaje específico para errores de validación
                throw new ApplicationException("Error de validación: " + ex.Message);
            }
            catch (Exception ex)
            {
                // Mensaje genérico para cualquier otro tipo de excepción
                throw new ApplicationException("Ocurrió un error inesperado al crear el administrador. Por favor, intente más tarde. " + ex.Message);
            }
        }


        /// <summary>
        /// Obtiene un administrador por su ID, incluyendo su tipo de documento.
        /// </summary>
        /// <param name="id">El ID del administrador a buscar.</param>
        /// <returns>El administrador encontrado como AdminDto.</returns>
        public async Task<AdminDto> GetAdminByIdAsync(string id)
        {
            try
            {
                // Obtener el administrador por su ID
                var admin = await repository.GetByIdAsync(id);

                // Verificar si se encontró el administrador
                if (admin == null)
                {
                    throw new ArgumentException("No se encontró el administrador.");
                }

                // Mapear el administrador a AdminDto
                var adminDto = mapper.Map<AdminDto>(admin);

                // Obtener todos los tipos de documento
                var documents = await documentTypeRepository.GetAllAsync();

                // Verificar si se encontraron tipos de documento
                if (documents == null || !documents.Any())
                {
                    throw new ApplicationException("No se encontraron tipos de documento.");
                }

                // Buscar el tipo de documento correspondiente al administrador
                var documentType = documents
                    .FirstOrDefault(dt => dt.IdTypeDocument == adminDto.DocumentTypeId);

                // Inicializar la lista de tipos de documento
                adminDto.DocumentType = new List<DocumentTypeDto>();

                // Si se encuentra el tipo de documento, agregarlo a la lista
                if (documentType != null)
                {
                    var documentTypeDto = new DocumentTypeDto
                    {
                        Abbreviation = documentType.Abbreviation,
                        DocumentName = documentType.DocumentName
                    };

                    adminDto.DocumentType.Add(documentTypeDto);
                }

                // Retornar el AdminDto con la información del administrador
                return adminDto;
            }
            catch (Exception ex)
            {
                // Manejar excepciones con un mensaje claro
                throw new ApplicationException($"Ocurrió un error al obtener el administrador: {ex.Message}", ex);
            }
        }


        /// <summary>
        /// Obtiene todos los administradores.
        /// </summary>
        /// <returns></returns>
        public async Task<List<AdminDto>> GetAllAdminsAsync()
        {
            try
            {
                // Obtener todos los administradores
                var admins = await repository.GetAllAsync();

                // Obtener todos los tipos de documento
                var documents = await documentTypeRepository.GetAllAsync();

                // Mapear administradores a AdminDto
                var adminDtos = mapper.Map<List<AdminDto>>(admins);

                // Asignar tipos de documento a cada administrador
                foreach (var adminDto in adminDtos)
                {
                    // Buscar el tipo de documento correspondiente al administrador
                    var documentType = documents
                        .FirstOrDefault(dt => dt.IdTypeDocument == adminDto.DocumentTypeId);

                    // Si se encuentra el tipo de documento, asignarlo a la lista de tipos de documento del administrador
                    if (documentType != null)
                    {
                        var documentTypeDto = new DocumentTypeDto
                        {
                            Abbreviation = documentType.Abbreviation,
                            DocumentName = documentType.DocumentName
                        };

                        // Inicializar la lista si es nula
                        adminDto.DocumentType ??= new List<DocumentTypeDto>();
                        adminDto.DocumentType.Add(documentTypeDto);
                    }
                }

                // Retornar la lista de AdminDto con la información de todos los administradores
                return adminDtos;
            }
            catch (Exception ex)
            {
                // Manejar excepciones con un mensaje claro
                throw new ApplicationException($"Ocurrió un error al obtener los administradores: {ex.Message}", ex);
            }
        }


        /// <summary>
        /// Obtiene el tipo de documento para un administrador.
        /// </summary>
        /// <param name="adminId"></param>
        /// <returns></returns>
        public async Task<AdminDto> GetDocumentTypeForAdminAsync(string numberDocument)
        {
            try
            {
                // Obtener el administrador por su número de documento
                var admin = await repository.GetByConditionAsync(number => number.DocumentNumber == numberDocument);

                // Verificar si se encontró el administrador
                if (admin == null)
                {
                    throw new ArgumentException("No se encontró el administrador.");
                }

                // Mapear el administrador a AdminDto
                var adminDto = mapper.Map<AdminDto>(admin);

                // Obtener todos los tipos de documento
                var documents = await documentTypeRepository.GetAllAsync();

                // Buscar el tipo de documento correspondiente al administrador
                var documentType = documents
                    .FirstOrDefault(dt => dt.IdTypeDocument == adminDto.DocumentTypeId);

                // Asignar el tipo de documento al administrador si se encuentra
                if (documentType != null)
                {
                    adminDto.DocumentType = new List<DocumentTypeDto>
                    {
                       new DocumentTypeDto
                       {
                          Abbreviation = documentType.Abbreviation,
                          DocumentName = documentType.DocumentName
                       }
                    };
                }

                // Retornar el AdminDto con la información del administrador y su tipo de documento
                return adminDto;
            }
            catch (ApplicationException ex)
            {
                // Manejar excepciones con un mensaje claro
                throw new ApplicationException($"Ocurrió un error al obtener el tipo de documento del administrador: {ex.Message}", ex);
            }
            catch (Exception ex)
            {
                // Manejar excepciones inesperadas
                throw new ApplicationException($"Se produjo un error inesperado: {ex.Message}", ex);
            }
        }

        /// <summary>
        /// Elimina un administrador por su ID.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task DeleteAdminAsync(string id)
        {
            try
            {
                // Verificar que el ID no sea nulo o vacío
                if (string.IsNullOrWhiteSpace(id))
                {
                    throw new ArgumentException("El identificador del administrador no puede estar vacío.", nameof(id));
                }

                // Eliminar el administrador por su ID
                await repository.DeleteAsync(id);
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Ocurrió un error al eliminar el administrador. " + ex.Message);
            }
        }

        /// <summary>
        /// Actualiza un administrador existente.
        /// </summary>
        /// <param name="adminDto"></param>
        /// <returns></returns>
        public async Task<bool> UpdateAdminAsync(string id, UpdateAdminDto adminDto)
        {
            try
            {
                // Verificar que el ID no sea nulo o vacío
                if (string.IsNullOrWhiteSpace(id))
                {
                    throw new ArgumentException("El ID del administrador no puede estar vacío. Por favor, proporciona un ID válido.", nameof(id));
                }

                // Validación del DTO
                var validationResults = new List<ValidationResult>();
                var validationContext = new ValidationContext(adminDto);
                bool isValid = Validator.TryValidateObject(adminDto, validationContext, validationResults, true);

                if (!isValid)
                {
                    // Lanzar una excepción con los errores de validación
                    throw new ValidationException("Por favor, corrige los siguientes errores de validación: " +
                        string.Join(", ", validationResults.Select(v => v.ErrorMessage)));
                }

                // Obtener el administrador existente por ID
                var existingAdmin = await repository.GetByIdAsync(id);
                if (existingAdmin == null)
                {
                    throw new ApplicationException("El administrador no existe.");
                }

                // Verificación de duplicados (correo electrónico)
                var duplicateAdmin = await repository.GetByConditionAsync(a => a.Email == adminDto.Email && a.IdAdmin != id);
                if (duplicateAdmin != null)
                {
                    throw new ArgumentException("Ya existe un administrador con este correo electrónico. Por favor, utiliza otro.");
                }

                // Actualizar propiedades del administrador con los nuevos datos
                existingAdmin.FirstName = adminDto.FirstName;
                existingAdmin.LastName = adminDto.LastName;
                existingAdmin.Email = adminDto.Email;

                // Verificar si el número de teléfono ha cambiado
                if (!string.Equals(existingAdmin.Phone, adminDto.Phone, StringComparison.OrdinalIgnoreCase))
                {
                    existingAdmin.Phone = adminDto.Phone;
                }

                // Verificar si el número de documento ha cambiado
                if (!string.Equals(existingAdmin.DocumentNumber, adminDto.DocumentNumber, StringComparison.OrdinalIgnoreCase))
                {
                    // Verificar si el número de documento ya está en uso por otro administrador
                    var existingAdminWithSameDoc = await repository.GetByConditionAsync(a => a.DocumentNumber == adminDto.DocumentNumber && a.IdAdmin != id);
                    if (existingAdminWithSameDoc != null)
                    {
                        throw new ArgumentException("Ya existe un administrador con este número de documento.");
                    }

                    existingAdmin.DocumentNumber = adminDto.DocumentNumber;
                }

                // Verificar si el tipo de documento ha cambiado
                if (adminDto.DocumentType != null && adminDto.DocumentType.Any())
                {
                    // Obtener el tipo de documento basado en el nombre seleccionado
                    var selectedDocumentType = adminDto.DocumentType.FirstOrDefault();
                    if (selectedDocumentType == null)
                    {
                        throw new ArgumentException("El tipo de documento no se ha seleccionado. Por favor, selecciona un tipo de documento válido.");
                    }

                    var documentType = await documentTypeRepository.GetByConditionAsync(dt => dt.DocumentName == selectedDocumentType.DocumentName);
                    if (documentType == null)
                    {
                        throw new ArgumentException("El tipo de documento seleccionado no es válido. Por favor, selecciona uno de la lista.");
                    }

                    // Asignar el DocumentTypeId
                    existingAdmin.DocumentTypeId = documentType.IdTypeDocument;
                }

                // Actualizar la contraseña solo si se proporciona una nueva
                if (!string.IsNullOrWhiteSpace(adminDto.Password))
                {
                    // Encriptar la nueva contraseña
                    existingAdmin.Password = adminDto.Password.EncryptPassword();
                }

                // Actualizar el administrador en la base de datos
                await repository.UpdateAsync(id, existingAdmin);

                return true; // Devuelve true si la actualización fue exitosa
            }
            catch (ArgumentException ex)
            {
                // Mensaje específico para errores de validación
                throw new ApplicationException($"Error en los datos proporcionados: {ex.Message}");
            }
            catch (Exception ex)
            {
                // Mensaje genérico para cualquier otro tipo de excepción
                throw new ApplicationException($"Ocurrió un error inesperado al actualizar el administrador. Por favor, intente más tarde. {ex.Message}");
            }
        }
        /// <summary>
        /// Inicia sesión como administrador.
        /// </summary>
        /// <param name="loginDto"></param>
        /// <returns></returns>
        /// <exception cref="ArgumentException"></exception>
        /// <exception cref="ApplicationException"></exception>
        public async Task<AdminDto> LoginAsync(LoginDto loginDto)
        {
            try
            {

                // Validación del DTO
                var validationResults = new List<ValidationResult>();
                var validationContext = new ValidationContext(loginDto);
                bool isValid = Validator.TryValidateObject(loginDto, validationContext, validationResults, true);

                if (!isValid)
                {
                    // Lanzar una excepción con los errores de validación
                    throw new ValidationException("Por favor, corrije los siguientes errores: " + string.Join(", ", validationResults.Select(v => v.ErrorMessage)));
                }

                // Obtener el administrador por el numero de documento
                var admin = await repository.GetByConditionAsync(a => a.DocumentNumber == loginDto.DocumentNumber);
                if (admin == null)
                {
                    throw new ArgumentException("No se encontró un administrador con este numero de documento.");
                }

                // Verificar la contraseña
                if (!loginDto.Password.VerifyPassword(admin.Password))
                {
                    throw new ArgumentException("La contraseña es incorrecta.");
                }

                // Obtener todos los tipos de documento
                var documents = await documentTypeRepository.GetAllAsync();

                // Verificar si se encontraron tipos de documento
                if (documents == null || !documents.Any())
                {
                    throw new ApplicationException("No se encontraron tipos de documento.");
                }

                // Mapear el administrador a AdminDto
                var adminDto = mapper.Map<AdminDto>(admin);

                // Buscar el tipo de documento correspondiente al administrador
                var documentType = documents
                    .FirstOrDefault(dt => dt.IdTypeDocument == admin.DocumentTypeId);

                // Inicializar la lista de tipos de documento
                adminDto.DocumentType = new List<DocumentTypeDto>();

                // Si se encuentra el tipo de documento, agregarlo a la lista
                if (documentType != null)
                {
                    var documentTypeDto = new DocumentTypeDto
                    {
                        Abbreviation = documentType.Abbreviation,
                        DocumentName = documentType.DocumentName
                    };

                    adminDto.DocumentType.Add(documentTypeDto);
                }

                // Retornar el AdminDto con la información del administrador
                return adminDto;
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Ocurrió un error al iniciar sesión. Por favor, intente de nuevo.", ex);
            }
        }
    }
}
