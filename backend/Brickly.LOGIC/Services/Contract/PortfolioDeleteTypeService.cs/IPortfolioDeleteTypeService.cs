using Brickly.DTO;

namespace Brickly.LOGIC.Services.Contract.PortfolioDeleteTypeService.cs {
    public interface IPortfolioDeleteTypeService {
        Task<PortfolioTypeDto> DeletePortfolioTypeAsync(PortfolioTypeDto portfolioDeleteTypeDto);

    }
}
