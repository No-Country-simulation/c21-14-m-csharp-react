using Brickly.DTO.Register;
using Brickly.MODEL;
using MongoDB.Bson;

namespace Brickly.LOGIC.Services.Contract.DocumentTypeService;

public interface IDocumentTypeService
{
    Task<DocumentTypeDto> CreateDocumentTypeAsync(DocumentTypeDto documentTypeDto);
    Task<DocumentTypeDto> UpdateDocumentTypeAsync(string id, DocumentTypeDto documentTypeDto);
    Task<List<DocumentType>> GetAllDocumentTypesAsync();
    Task<DocumentType> GetDocumentTypeByIdAsync(string id);
}
