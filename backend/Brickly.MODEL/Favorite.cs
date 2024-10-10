using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL;

public partial class Favorite
{
    public ObjectId Id { get; set; }
    public ObjectId InvestorId { get; set; } // Reference to Investor 
    public ObjectId PropertyId { get; set; } // Reference to Property 
    public DateTime FavoriteDate { get; set; } = DateTime.UtcNow;
    public bool Status { get; set; }
}
