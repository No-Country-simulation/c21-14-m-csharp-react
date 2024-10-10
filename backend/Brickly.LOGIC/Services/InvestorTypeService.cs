using AutoMapper;
using Brickly.DAL.Repository.Contract;
using Brickly.DTO;
using Brickly.LOGIC.Services.Contract.InvestorTypeService;
using Brickly.MODEL;
using MongoDB.Bson;

namespace Brickly.LOGIC.Services {
    public class InvestorTypeService : IInvestorTypeService {
        private readonly IGenericRepository<Portfolio> repository;
        private readonly IMapper mapper;

        public InvestorTypeService(IGenericRepository<Portfolio> repository, IMapper mapper) {
            this.repository = repository;
            this.mapper = mapper;
        }

        public async Task<InvestorTypeDto> CreateInvestorTypeAsync(InvestorTypeDto investorDto) {
            // Validación: Verificar que el correo no esté vacío
            if (string.IsNullOrEmpty(investorDto.Email)) {
                throw new ArgumentException("Email is mandatory");
            }

            // Validación: Verificar que el inversor no exista
            var existingInvestor = await repository.GetByIdAsync(new ObjectId(investorDto.DocumentNumber));
            if (existingInvestor != null) {
                throw new InvalidOperationException("An investor with this document number already exists");
            }

            // Mapeo del DTO al modelo de datos
            var investorType = mapper.Map<Portfolio>(investorDto);

            try {
                // Creación del inversor en la base de datos
                await repository.CreateAsync(investorType);
            }
            catch (Exception ex) {
                // Manejo de errores: Captura cualquier excepción y lanza una ApplicationException
                throw new ApplicationException("Error creating inverter", ex);
            }

            // Retorno del DTO del inversor creado
            return mapper.Map<InvestorTypeDto>(investorType); // Devuelve el DTO creado
        }

    }
}

