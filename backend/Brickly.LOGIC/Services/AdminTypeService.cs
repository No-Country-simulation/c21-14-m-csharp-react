using AutoMapper;
using Brickly.DAL.Repository.Contract;
using Brickly.DTO;
using Brickly.LOGIC.Services.Contract.AdminTypeService;
using Brickly.MODEL;
using MongoDB.Bson;

namespace Brickly.LOGIC.Services {
    public class AdminTypeService : IAdminTypeService {

        private readonly IGenericRepository<Portfolio> repository;
        private readonly IMapper mapper;

        public AdminTypeService(IGenericRepository<Portfolio> repository, IMapper mapper) {
            this.repository = repository;
            this.mapper = mapper;
        }

        public async Task<AdminTypeDto> CreateAdminTypeAsync(AdminTypeDto adminTypeDto) {
            // Validar si ya existe un administrador con el mismo ID
            var existingAdmin = await repository.GetByIdAsync(new ObjectId(adminTypeDto.DocumentNumber));
            if (existingAdmin != null) {
                throw new InvalidOperationException("An administrator with this ID already exists");
            }
            try {
                // Mapeo del DTO al modelo de datos
                var adminType = mapper.Map<Portfolio>(adminTypeDto);

                // Creación del administrador en la base de datos
                await repository.CreateAsync(adminType);

                // Devolver el DTO del administrador creado
                return mapper.Map<AdminTypeDto>(adminType);
            }
            catch (Exception ex) {
                // Manejar excepciones
                throw new ApplicationException("An error occurred while creating the admin", ex);
            }
        }
    }
}
