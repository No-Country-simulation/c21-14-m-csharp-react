using AutoMapper;
using Brickly.DAL.Repository.Contract;
using Brickly.DTO;
using Brickly.LOGIC.Services.Contract.PortfolioTypeService;
using Brickly.MODEL;
using MongoDB.Bson;

namespace Brickly.LOGIC.Services {
    public class PortfolioTypeService : IPortfolioTypeService {
        private readonly IGenericRepository<Portfolio> repository;
        private readonly IMapper mapper;

        public PortfolioTypeService(IGenericRepository<Portfolio> repository, IMapper mapper) {
            this.repository = repository;
            this.mapper = mapper;
        }

        public async Task<PortfolioTypeDto> CreatePortfolioTypeAsync(PortfolioTypeDto portfolioDto) {
            // Validar si ya existe un portafolio 
            var existingPortfolio = await repository.GetByIdAsync(new ObjectId(portfolioDto.InvestorId));
            if (existingPortfolio != null) {
                throw new InvalidOperationException("A portfolio already exists with this ID");
            }

            // Mapeo del DTO al modelo de datos
            var portfolioType = mapper.Map<Portfolio>(portfolioDto);

            // Creación del portafolio en la base de datos
            await repository.CreateAsync(portfolioType);

            // Devolver el DTO del portafolio creado
            return mapper.Map<PortfolioTypeDto>(portfolioType);
        }
    }
}

