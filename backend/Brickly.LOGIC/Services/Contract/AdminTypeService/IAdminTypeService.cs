using Brickly.DTO;

namespace Brickly.LOGIC.Services.Contract.AdminTypeService {
    public interface IAdminTypeService {
        Task<AdminTypeDto> CreateAdminTypeAsync(AdminTypeDto adminTypeDto);

    }
}
