using AutoMapper;
using Brickly.DAL.Repository.Contract;
using Brickly.DTO.Register;
using Brickly.LOGIC.Services.Contract.DocumentTypeService;
using Brickly.MODEL;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Brickly.LOGIC.Services
{
    public class DocumentTypeService : IDocumentTypeService
    {
        private readonly IGenericRepository<DocumentType> repository;
        private readonly IMapper mapper;

        public DocumentTypeService(IGenericRepository<DocumentType> repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        /// <summary>
        /// Crea un nuevo tipo de documento.
        /// </summary>
        /// <param name="documentTypeDto"></param>
        /// <returns></returns>
        /// <exception cref="ApplicationException"></exception>
        public async Task<DocumentTypeDto> CreateDocumentTypeAsync(DocumentTypeDto documentTypeDto)
        {
            try
            {
                // Validación del DTO
                var validationResults = new List<ValidationResult>();
                var validationContext = new ValidationContext(documentTypeDto);
                bool isValid = Validator.TryValidateObject(documentTypeDto, validationContext, validationResults, true);

                if (!isValid)
                {
                    // Lanzar una excepción con los errores de validación
                    throw new ValidationException("El DTO contiene errores de validación: " + string.Join(", ", validationResults.Select(v => v.ErrorMessage)));
                }

                // Verificación de duplicados
                var existingDocumentType = await repository.GetByConditionAsync(dt => dt.Abbreviation == documentTypeDto.Abbreviation || dt.DocumentName == documentTypeDto.DocumentName);
                if (existingDocumentType != null)
                {
                    throw new ArgumentException("Ya existe un tipo de documento con la misma abreviatura o nombre.");
                }

                // Lógica para crear el tipo de documento
                var documentType = mapper.Map<DocumentType>(documentTypeDto);
                await repository.CreateAsync(documentType);
                return mapper.Map<DocumentTypeDto>(documentType); // Devuelve el DTO creado
            }
            catch (TaskCanceledException ex)
            {
                // Mensaje específico para errores de cancelación de tareas
                throw new ApplicationException("Ocurrió un error al crear el tipo de documento. Por favor, intente más tarde.", ex);
            }
            catch (ArgumentException ex)
            {
                // Mensaje específico para errores de validación
                throw new ApplicationException("Error de validación: " + ex.Message);
            }
            catch (Exception ex)
            {
                // Mensaje genérico para cualquier otro tipo de excepción
                throw new ApplicationException("Ocurrió un error inesperado al crear el tipo de documento. Por favor, intente más tarde. " + ex.Message);
            }
        }
        /// <summary>
        /// Obtiene todos los tipos de documentos.
        /// </summary>
        /// <returns>Lista de tipos de documentos.</returns>
        public async Task<List<DocumentType>> GetAllDocumentTypesAsync()
        {
            try
            {
                var documentTypes = await repository.GetAllAsync();
                return documentTypes.ToList();
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Ocurrió un error al obtener los tipos de documentos. " + ex.Message);
            }
        }

        /// <summary>
        /// Obtiene un tipo de documento por su ID.
        /// </summary>
        /// <param name="id">ID del tipo de documento.</param>
        /// <returns>Tipo de documento.</returns>
        public async Task<DocumentType> GetDocumentTypeByIdAsync(string id)
        {
            try
            {
                var documentType = await repository.GetByIdAsync(id);
                if (documentType == null)
                {
                    throw new ArgumentException("No se encontró el tipo de documento.");
                }
                return mapper.Map<DocumentType>(documentType);
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Ocurrió un error al obtener el tipo de documento. " + ex.Message);
            }
        }
        /// <summary>
        /// Actualiza un tipo de documento existente.
        /// </summary>
        /// <param name="id">ID del tipo de documento.</param>
        /// <param name="documentTypeDto">Nuevo tipo de documento.</param>
        /// <returns>Tipo de documento actualizado.</returns>
        public async Task<DocumentTypeDto> UpdateDocumentTypeAsync(string id, DocumentTypeDto documentTypeDto)
        {
            try
            {
                // Validación del DTO
                var validationResults = new List<ValidationResult>();
                var validationContext = new ValidationContext(documentTypeDto);
                bool isValid = Validator.TryValidateObject(documentTypeDto, validationContext, validationResults, true);

                if (!isValid)
                {
                    // Lanzar una excepción con los errores de validación
                    throw new ValidationException("El DTO contiene errores de validación: " + string.Join(", ", validationResults.Select(v => v.ErrorMessage)));
                }

                // Verificación de duplicados
                var existingDocumentType = await repository.GetByConditionAsync(dt => (dt.Abbreviation == documentTypeDto.Abbreviation || dt.DocumentName == documentTypeDto.DocumentName) && dt.IdTypeDocument != id);
                if (existingDocumentType != null)
                {
                    throw new ArgumentException("Ya existe un tipo de documento con la misma abreviatura o nombre.");
                }


                // Lógica para actualizar el tipo de documento
                var documentType = mapper.Map<DocumentType>(documentTypeDto);

                documentType.IdTypeDocument = new ObjectId(id).ToString();

                await repository.UpdateAsync(id, documentType);
                return mapper.Map<DocumentTypeDto>(documentType); // Devuelve el DTO actualizado
            }
            catch (TaskCanceledException ex)
            {
                // Mensaje específico para errores de cancelación de tareas
                throw new ApplicationException("Ocurrió un error al actualizar el tipo de documento. Por favor, intente más tarde.", ex);
            }
            catch (ArgumentException ex)
            {
                // Mensaje específico para errores de validación
                throw new ApplicationException("Error de validación: " + ex.Message);
            }
            catch (Exception ex)
            {
                // Mensaje genérico para cualquier otro tipo de excepción
                throw new ApplicationException("Ocurrió un error inesperado al actualizar el tipo de documento. Por favor, intente más tarde. " + ex.Message);
            }
        }
    }
}
