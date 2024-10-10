using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL;

public partial class Investment
{
    public ObjectId Id { get; set; }
    public ObjectId PropertyId { get; set; } // Reference to Property 
    public ObjectId InvestorId { get; set; } // Reference to Investor 
    public double InvestedAmount { get; set; } // 'monto_invertido' in Spanish 
    public DateTime InvestmentDate { get; set; } = DateTime.UtcNow;
    public string InvestmentStatus { get; set; } // 'estado_inversion' in Spanish 
}
