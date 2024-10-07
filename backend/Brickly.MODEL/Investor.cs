using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL;

public partial class Investor
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("document_type_id")]
    public string? DocumentTypeId { get; set; } 

    [BsonElement("first_name")]
    public string FirstName { get; set; } = string.Empty;

    [BsonElement("last_name")]
    public string LastName { get; set; } = string.Empty;    

    [BsonElement("email")]
    public string Email { get; set; } = string.Empty;

    [BsonElement("phone")]
    public string Phone { get; set; } = string.Empty;

    [BsonElement("address")]
    public string Address { get; set; } = string.Empty;

    [BsonElement("registration_date")]
    public DateTime RegistrationDate { get; set; }

    [BsonElement("document_number")]
    public string DocumentNumber { get; set; } = string.Empty;
}
