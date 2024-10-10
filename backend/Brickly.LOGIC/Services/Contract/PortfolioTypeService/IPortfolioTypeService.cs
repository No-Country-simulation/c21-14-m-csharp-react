using Brickly.DTO;

namespace Brickly.LOGIC.Services.Contract.PortfolioTypeService {
    public interface IPortfolioTypeService {
        Task<PortfolioTypeDto> CreatePortfolioTypeAsync(PortfolioTypeDto portfolioTypeDto);
    }
}
