using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Brickly.Attributes;

namespace Brickly.MODEL;

[CollectionName("properties")]
public partial class SponsorshipSuggestion
{

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdSponsorshipSuggestion { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string? InvestorId { get; set; }


    [BsonRepresentation(BsonType.ObjectId)]
    public string? AdminId { get; set; } 

    public string? Message { get; set; }

    [BsonDefaultValue(1)]
    public bool Status { get; set; } = true;
}

