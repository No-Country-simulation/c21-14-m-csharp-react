using Brickly.Attributes;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Brickly.MODEL;

[CollectionName("document_types")]
public partial class DocumentType
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdTypeDocument { get; set; }
    public string? Abbreviation { get; set; } // 'siglas' in Spanish
    public string? DocumentName { get; set; } // 'nombre_documento' in Spanish
}
