using AutoMapper;
using Brickly.DAL.Repository.Contract;
using Brickly.DTO;
using Brickly.LOGIC.Services.Contract.PortfolioDeleteTypeService.cs;
using Brickly.MODEL;
using MongoDB.Bson;

namespace Brickly.LOGIC.Services {
    public class PortfolioDeleteTypeService : IPortfolioDeleteTypeService {
        private readonly IGenericRepository<Portfolio> repository;
        private readonly IMapper mapper;

        public PortfolioDeleteTypeService(IGenericRepository<Portfolio> repository, IMapper mapper) {
            this.repository = repository;
            this.mapper = mapper;
        }

        public async Task<PortfolioTypeDto> DeletePortfolioTypeAsync(PortfolioTypeDto deletePortfolioDto) {
            try {
                // Validar si el portafolio existe antes de intentar eliminarlo
                var existingPortfolio = await repository.GetByIdAsync(new ObjectId(deletePortfolioDto.InvestorId));

                if (existingPortfolio == null) {
                    // Excepción si no se encuentra el portafolio
                    throw new KeyNotFoundException("No portfolio found with the provided ID");
                }

                // Eliminar el portafolio por su ID
                await repository.DeleteAsync(new ObjectId(deletePortfolioDto.InvestorId));

                // Devolver el DTO del portafolio eliminado
                return mapper.Map<PortfolioTypeDto>(existingPortfolio); // Mapea el portafolio eliminado al DTO
            }
            catch (KeyNotFoundException e) {
                // Manejo específico si no se encuentra el portafolio
                throw new ApplicationException("Portfolio was not found to delete", e);
            }
            catch (Exception ex) {
                // Manejo general de excepciones
                throw new ApplicationException("An error occurred while trying to delete the portfolio", ex);
            }
        }
    }
}


