using Brickly.Attributes;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Brickly.MODEL;

[CollectionName("document_types")]
public partial class DocumentType
{
    [BsonId]
    public ObjectId Id { get; set; } // MongoDB ObjectId
    public string? Abbreviation { get; set; } // 'siglas' in Spanish
    public string? DocumentName { get; set; } // 'nombre_documento' in Spanish
}
