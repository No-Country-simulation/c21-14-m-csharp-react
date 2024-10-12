using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL;

public partial class Property
{
    public ObjectId Id { get; set; }
    public ObjectId AdminId { get; set; } // Reference to Admin
    public ObjectId CountryId { get; set; } // Reference to Country
    public string? Name { get; set; } // 'nombre' in Spanish
    public string? Description { get; set; } // 'descripcion' in Spanish
    public double Price { get; set; } // 'precio' in Spanish
    public string? Location { get; set; } // 'ubicacion' in Spanish
    public double SquareMeters { get; set; } // 'metros_cuadrado' in Spanish
    public string? Type { get; set; } // 'tipo' in Spanish
    public string? Status { get; set; } // 'estado' in Spanish
    public string? PhotoUrl { get; set; } // 'foto_url' in Spanish
    public double FinancialMetrics { get; set; } // 'metricas_financieras' in Spanish
}
