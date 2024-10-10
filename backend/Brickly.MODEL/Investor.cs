using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL;

public partial class Investor
{
    public ObjectId Id { get; set; }
    public ObjectId DocumentTypeId { get; set; } // Reference to DocumentType 
    public ObjectId CountryId { get; set; } // Reference to Country 
    public string? FirstName { get; set; } // 'nombre' in Spanish 
    public string? LastName { get; set; } // 'apellido' in Spanish 
    public string? Email { get; set; }
    public string? Phone { get; set; } // 'telefono' in Spanish 
    public string? Address { get; set; } // 'direccion' in Spanish 
    public string? ProfilePictureUrl { get; set; } // 'urlFotoPerfil' in Spanish 
    public DateTime RegistrationDate { get; set; } = DateTime.UtcNow;
    public string? DocumentNumber { get; set; } // 'numero_documento' in Spanish 
    public bool Status { get; set; }
}
