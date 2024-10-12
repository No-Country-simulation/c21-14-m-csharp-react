using Brickly.DTO.Obtain;
using Brickly.DTO.Register;
using Brickly.DTO.Update;
using Brickly.LOGIC.Services.Contract.AdminService;
using Brickly_Backend.Response;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Brickly_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService adminService;
        public AdminController(IAdminService adminService)
        {
            this.adminService = adminService;
        }

        // POST: api/Admin/create
        [HttpPost("create")]
        public async Task<IActionResult> CreateAdmin([FromBody] CreateAdminDto adminDto)
        {
            var respuesta = new Response<CreateAdminDto>();

            try
            {
                // Validar si el DTO es válido
                if (adminDto == null)
                {
                    respuesta.Status = false;
                    respuesta.Message = "Los datos proporcionados no son válidos. Por favor, revise la información e intente nuevamente.";
                    return BadRequest(respuesta); // Retorna 400 BadRequest
                }

                // Llamar al servicio para crear el administrador
                var admin = await adminService.CreateAdminAsync(adminDto);

                // Si el administrador no pudo ser creado, retorna un 404 NotFound
                if (admin == null)
                {
                    respuesta.Status = false;
                    respuesta.Message = "No se pudo crear el administrador. Inténtelo nuevamente.";
                    return NotFound(respuesta); // Retorna 404 NotFound
                }

                // Si el administrador fue creado correctamente
                respuesta.Status = true;
                respuesta.Data = admin;
                respuesta.Message = "Administrador creado exitosamente";

                return Ok(respuesta); // Retornar respuesta con estado 200 OK
            }
            catch (ArgumentException ex)
            {
                // Maneja errores específicos lanzados por el servicio
                respuesta.Status = false;
                respuesta.Message = ex.Message;
                return BadRequest(respuesta); // Retorna 400 BadRequest
            }
            catch (ApplicationException ex)
            {
                // Maneja excepciones genéricas lanzadas por el servicio
                respuesta.Status = false;
                respuesta.Message = ex.Message;
                return StatusCode(StatusCodes.Status500InternalServerError, respuesta); // Retorna 500 Internal Server Error
            }
            catch (Exception ex)
            {
                // Captura cualquier otra excepción que no sea de tipo ApplicationException
                respuesta.Status = false;
                respuesta.Message = "Se produjo un error inesperado: " + ex.Message;
                return StatusCode(StatusCodes.Status500InternalServerError, respuesta); // Retorna 500 Internal Server Error
            }
        }

        // GET: api/admin
        [HttpGet]
        public async Task<IActionResult> GetAllAdmins()
        {
            var respuesta = new Response<List<AdminDto>>();

            try
            {
                // Llamar al servicio para obtener todos los administradores
                var admins = await adminService.GetAllAdminsAsync();

                // Si no se encontraron administradores, retornar 404 NotFound
                if (admins == null || admins.Count == 0)
                {
                    respuesta.Status = false;
                    respuesta.Message = "No se encontraron administradores.";
                    return NotFound(respuesta); // Retorna 404 NotFound
                }

                // Si se encontraron administradores
                respuesta.Status = true;
                respuesta.Data = admins;
                respuesta.Message = "Administradores obtenidos exitosamente.";

                return Ok(respuesta); // Retornar respuesta con estado 200 OK
            }
            catch (ApplicationException ex)
            {
                // Maneja excepciones genéricas lanzadas por el servicio
                respuesta.Status = false;
                respuesta.Message = ex.Message;
                return StatusCode(StatusCodes.Status500InternalServerError, respuesta); // Retorna 500 Internal Server Error
            }
            catch (Exception ex)
            {
                // Captura cualquier otra excepción que no sea de tipo ApplicationException
                respuesta.Status = false;
                respuesta.Message = "Se produjo un error inesperado: " + ex.Message;
                return StatusCode(StatusCodes.Status500InternalServerError, respuesta); // Retorna 500 Internal Server Error
            }
        }

        // GET: api/admin/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAdminByIdAsync(string id)
        {
            var respuesta = new Response<AdminDto>();

            try
            {
                var admin = await adminService.GetAdminByIdAsync(id);

                // Si no se encontró el administrador, retornar 404 NotFound
                if (admin == null)
                {
                    respuesta.Status = false;
                    respuesta.Message = "No se encontró el administrador.";
                    return NotFound(respuesta); // Retorna 404 NotFound
                }

                // Si se encontró el administrador
                respuesta.Status = true;
                respuesta.Data = admin;
                respuesta.Message = "Administrador obtenido exitosamente.";

                return Ok(respuesta); // Retornar respuesta con estado 200 OK
            }
            catch (ApplicationException ex)
            {
                respuesta.Status = false;
                respuesta.Message = ex.Message;
                return StatusCode(StatusCodes.Status500InternalServerError, respuesta); // Retorna 500 Internal Server Error
            }
            catch (Exception ex)
            {
                respuesta.Status = false;
                respuesta.Message = "Se produjo un error inesperado: " + ex.Message;
                return StatusCode(StatusCodes.Status500InternalServerError, respuesta); // Retorna 500 Internal Server Error
            }
        }
        
        // GET: api/admin/{adminId}/document-type
        [HttpGet("{numberDocument}/document-type")]
        public async Task<IActionResult> GetDocumentTypeForAdminAsync(string numberDocument)
        {
            var respuesta = new Response<AdminDto>();

            try
            {
                // Llamar al servicio para obtener el tipo de documento del administrador
                var documentType = await adminService.GetDocumentTypeForAdminAsync(numberDocument);

                // Si no se encontró el tipo de documento, retornar 404 NotFound
                if (documentType == null)
                {
                    respuesta.Status = false;
                    respuesta.Message = "No se encontró el tipo de documento.";
                    return NotFound(respuesta); // Retorna 404 NotFound
                }

                // Si se encontró el tipo de documento
                respuesta.Status = true;
                respuesta.Data = documentType;
                respuesta.Message = "Tipo de documento obtenido exitosamente.";

                return Ok(respuesta); // Retornar respuesta con estado 200 OK
            }
            catch (ApplicationException ex)
            {
                // Manejar excepciones específicas lanzadas por el servicio
                respuesta.Status = false;
                respuesta.Message = ex.Message;
                return StatusCode(StatusCodes.Status500InternalServerError, respuesta); // Retorna 500 Internal Server Error
            }
            catch (Exception ex)
            {
                // Captura cualquier otra excepción que no sea de tipo ApplicationException
                respuesta.Status = false;
                respuesta.Message = "Se produjo un error inesperado: " + ex.Message;
                return StatusCode(StatusCodes.Status500InternalServerError, respuesta); // Retorna 500 Internal Server Error
            }
        }

        // DELETE: api/admin/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdminAsync(string id)
        {
            var respuesta = new Response<string>();

            try
            {
                await adminService.DeleteAdminAsync(id);
                respuesta.Status = true;
                respuesta.Message = "Administrador eliminado exitosamente.";
                return Ok(respuesta); // Retorna 200 OK
            }
            catch (ApplicationException ex)
            {
                respuesta.Status = false;
                respuesta.Message = ex.Message;
                return StatusCode(StatusCodes.Status500InternalServerError, respuesta); // Retorna 500 Internal Server Error
            }
            catch (Exception ex)
            {
                respuesta.Status = false;
                respuesta.Message = "Se produjo un error inesperado: " + ex.Message;
                return StatusCode(StatusCodes.Status500InternalServerError, respuesta); // Retorna 500 Internal Server Error
            }
        }

        // PUT: api/admin/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAdminAsync(string id, [FromBody] UpdateAdminDto adminDto)
        {
            var respuesta = new Response<bool>();

            try
            {
                var isUpdated = await adminService.UpdateAdminAsync(id, adminDto);
                respuesta.Status = isUpdated;
                respuesta.Message = "Administrador actualizado exitosamente.";
                return Ok(respuesta); // Retorna 200 OK
            }
            catch (ApplicationException ex)
            {
                respuesta.Status = false;
                respuesta.Message = ex.Message;
                return StatusCode(StatusCodes.Status400BadRequest, respuesta); // Retorna 400 Bad Request
            }
            catch (Exception ex)
            {
                respuesta.Status = false;
                respuesta.Message = "Se produjo un error inesperado: " + ex.Message;
                return StatusCode(StatusCodes.Status500InternalServerError, respuesta); // Retorna 500 Internal Server Error
            }
        }

        // POST: api/admin/login
        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginDto loginDto)
        {
            var respuesta = new Response<AdminDto>();

            try
            {
                var admin = await adminService.LoginAsync(loginDto);
                respuesta.Status = true;
                respuesta.Data = admin;
                respuesta.Message = "Inicio de sesión exitoso.";
                return Ok(respuesta); // Retorna 200 OK
            }
            catch (ApplicationException ex)
            {
                respuesta.Status = false;
                respuesta.Message = ex.Message;
                return StatusCode(StatusCodes.Status401Unauthorized, respuesta); // Retorna 401 Unauthorized
            }
            catch (Exception ex)
            {
                respuesta.Status = false;
                respuesta.Message = "Se produjo un error inesperado: " + ex.Message;
                return StatusCode(StatusCodes.Status500InternalServerError, respuesta); // Retorna 500 Internal Server Error
            }
        }
    }
}
