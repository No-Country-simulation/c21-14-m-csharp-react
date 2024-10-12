
using Brickly.DTO.Register;
using System.Text.Json.Serialization;

namespace Brickly.DTO.Obtain;

public class AdminDto
{
    public string? IdAdmin { get; set; }
    public List<DocumentTypeDto>? DocumentType { get; set; }
    public string? DocumentNumber { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
    [JsonIgnore]
    public string? DocumentTypeId { get; set; }
}

