using Brickly.DTO;

namespace Brickly.LOGIC.Services.Contract.DocumentTypeService;

public interface IDocumentTypeService
{
    Task<DocumentTypeDto> CreateDocumentTypeAsync(DocumentTypeDto documentTypeDto);
}
