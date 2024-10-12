using MongoDB.Bson;
using Brickly.Attributes;
using MongoDB.Bson.Serialization.Attributes;

namespace Brickly.MODEL;

[CollectionName("favorites")]
public partial class Favorite
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdFavorites { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdInvestor { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdProperty { get; set; }

    [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
    public DateTime FavoriteDate { get; set; } = DateTime.UtcNow;
 
    public bool Status { get; set; }
}
