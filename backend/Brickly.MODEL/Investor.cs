using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Brickly.Attributes;

namespace Brickly.MODEL;

[CollectionName("investors")]
public partial class Investor
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdInvestor { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdDocumentType { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdCountry { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public string? Address { get; set; }
    public string? ProfilePictureUrl { get; set; }

    [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
    public DateTime RegistrationDate { get; set; } = DateTime.UtcNow;
    public string? DocumentNumber { get; set; }
    public string? Password { get; set; }
    public bool Status { get; set; }
}
