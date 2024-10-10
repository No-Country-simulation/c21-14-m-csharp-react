using Brickly.DTO;

namespace Brickly.LOGIC.Services.Contract.InvestorTypeService {
    public interface IInvestorTypeService {
        Task<InvestorTypeDto> CreateInvestorTypeAsync(InvestorTypeDto investorTypeDto);

    }
}
