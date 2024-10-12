using Brickly.DTO.Register;
using Brickly.LOGIC.Services.Contract.DocumentTypeService;
using Brickly.MODEL;
using Brickly_Backend.Response;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace Brickly_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentTypeController : ControllerBase
    {
        private readonly IDocumentTypeService documentTypeService;

        public DocumentTypeController(IDocumentTypeService documentTypeService)
        {
            this.documentTypeService = documentTypeService;
        }

        // POST: api/DocumentType/create
        [HttpPost("create")]
        public async Task<IActionResult> CreateDocumentType([FromBody] DocumentTypeDto documentTypeDto)
        {
            var respuesta = new Response<DocumentTypeDto>();

            try
            {
                // Validar si el DTO es válido
                if (documentTypeDto == null)
                {
                    respuesta.Status = false;
                    respuesta.Message = "Los datos proporcionados no son válidos. Por favor, revise la información e intente nuevamente.";
                    return BadRequest(respuesta); // Retorna 400 BadRequest
                }

                var documentType = await documentTypeService.CreateDocumentTypeAsync(documentTypeDto);

                // Si el tipo de documento no pudo ser creado, retorna un 404 NotFound
                if (documentType == null)
                {
                    respuesta.Status = false;
                    respuesta.Message = "No se pudo crear el tipo de documento. Inténtelo nuevamente.";
                    return NotFound(respuesta); // Retorna 404 NotFound
                }

                // Si el tipo de documento fue creado correctamente
                respuesta.Status = true;
                respuesta.Data = documentType;
                respuesta.Message = "Tipo de documento creado exitosamente";

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

        // GET: api/DocumentType/all
        [HttpGet("all")]
        public async Task<IActionResult> GetAllDocumentTypes()
        {
            var respuesta = new Response<List<DocumentType>>();

            try
            {
                var documentTypes = await documentTypeService.GetAllDocumentTypesAsync();
                respuesta.Status = true;
                respuesta.Data = documentTypes;
                respuesta.Message = "Tipos de documento obtenidos exitosamente";
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

        // GET: api/DocumentType/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDocumentTypeById(string id)
        {
            var respuesta = new Response<DocumentType>();

            try
            {
                var documentType = await documentTypeService.GetDocumentTypeByIdAsync(id);
                if (documentType == null)
                {
                    respuesta.Status = false;
                    respuesta.Message = "No se encontró el tipo de documento.";
                    return NotFound(respuesta); // Retorna 404 NotFound
                }

                respuesta.Status = true;
                respuesta.Data = documentType;
                respuesta.Message = "Tipo de documento obtenido exitosamente";
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

        // PUT: api/DocumentType/update/{id}
        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateDocumentType(string id, [FromBody] DocumentTypeDto documentTypeDto)
        {
            var respuesta = new Response<DocumentTypeDto>();

            try
            {
                // Validar si el DTO es válido
                if (documentTypeDto == null)
                {
                    respuesta.Status = false;
                    respuesta.Message = "Los datos proporcionados no son válidos. Por favor, revise la información e intente nuevamente.";
                    return BadRequest(respuesta); // Retorna 400 BadRequest
                }

                var updatedDocumentType = await documentTypeService.UpdateDocumentTypeAsync(id, documentTypeDto);
                if (updatedDocumentType == null)
                {
                    respuesta.Status = false;
                    respuesta.Message = "No se pudo actualizar el tipo de documento. Inténtelo nuevamente.";
                    return NotFound(respuesta); // Retorna 404 NotFound
                }

                respuesta.Status = true;
                respuesta.Data = updatedDocumentType;
                respuesta.Message = "Tipo de documento actualizado exitosamente";
                return Ok(respuesta); // Retornar respuesta con estado 200 OK
            }
            catch (ArgumentException ex)
            {
                respuesta.Status = false;
                respuesta.Message = ex.Message;
                return BadRequest(respuesta); // Retorna 400 BadRequest
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
    }
}
