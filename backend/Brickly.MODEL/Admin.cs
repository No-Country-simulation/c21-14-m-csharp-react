using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Brickly.Attributes;

namespace Brickly.MODEL;

[CollectionName("admins")]
public partial class Admin
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdAdmin { get; set; }
    [BsonRepresentation(BsonType.ObjectId)]
    public string? DocumentTypeId { get; set; }
    public string? DocumentNumber { get; set; } 
    public string? FirstName { get; set; } 
    public string? LastName { get; set; } 
    public string? Email { get; set; }
    public string? Phone { get; set; } 
    public string? Password { get; set; }
}

