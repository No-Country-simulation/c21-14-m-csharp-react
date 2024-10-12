using Brickly.DTO.Obtain;
using Brickly.DTO.Register;
using Brickly.DTO.Update;

namespace Brickly.LOGIC.Services.Contract.AdminService
{
    public interface IAdminService
    {
        Task<CreateAdminDto> CreateAdminAsync(CreateAdminDto adminDto);  // Crea un nuevo administrador de manera asíncrona.
        Task<List<AdminDto>> GetAllAdminsAsync(); // Obtiene todos los administradores de manera asíncrona.
        Task<AdminDto> GetAdminByIdAsync(string id); // Obtiene un administrador por su ID de manera asíncrona.
        Task<bool> UpdateAdminAsync(string id, UpdateAdminDto adminDto);  // Actualiza los datos de un administrador de manera asíncrona.
        Task DeleteAdminAsync(string id);  // Elimina un administrador por su ID de manera asíncrona.
        Task<AdminDto> GetDocumentTypeForAdminAsync(string numberDocument); // Obtiene el tipo de documento relacionado para un administrador de manera asíncrona.
        Task<AdminDto> LoginAsync(LoginDto loginDto);
    }
}
