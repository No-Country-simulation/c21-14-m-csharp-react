using Brickly.Attributes;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Brickly.MODEL;

[CollectionName("country")]
public partial class Country
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdCountry { get; set; }
    public string? Name { get; set; }
}

