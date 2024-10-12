using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL;

public partial class Portfolio
{
    public ObjectId Id { get; set; }
    public ObjectId InvestorId { get; set; } // Reference to Investor 
    public string PortfolioName { get; set; } = ""; // 'nombre_portafolio' in Spanish 
    public DateTime CreationDate { get; set; } = DateTime.UtcNow;
    public bool Status { get; set; }
}
