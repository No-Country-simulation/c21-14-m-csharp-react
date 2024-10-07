using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Brickly.MODEL;

public partial class DocumentType
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("abbreviation")]
    public string Abbreviation { get; set; } = string.Empty;

    [BsonElement("document_name")]
    public string DocumentName { get; set; } = string.Empty;
}
