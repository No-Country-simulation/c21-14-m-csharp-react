using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL;

public partial class Admin
{
    public ObjectId Id { get; set; }
    public ObjectId DocumentTypeId { get; set; } // Reference to DocumentType
    public string? DocumentNumber { get; set; } // 'numero_documento' in Spanish
    public string? FirstName { get; set; } // 'nombre' in Spanish
    public string? LastName { get; set; } // 'apellido' in Spanish
    public string? Email { get; set; }
    public string? Phone { get; set; } // 'telefono' in Spanish
    public string? Password { get; set; }
}

