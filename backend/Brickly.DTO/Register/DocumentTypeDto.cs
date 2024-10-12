using System.ComponentModel.DataAnnotations;
namespace Brickly.DTO.Register;

public class DocumentTypeDto
{
    [Required(ErrorMessage = "La abreviatura es obligatoria.")]
    [StringLength(10, ErrorMessage = "La abreviatura no puede exceder los 10 caracteres.")]
    public string Abbreviation { get; set; } = string.Empty;

    [Required(ErrorMessage = "El nombre del documento es obligatorio.")]
    [StringLength(100, ErrorMessage = "El nombre del documento no puede exceder los 100 caracteres.")]
    public string DocumentName { get; set; } = string.Empty;
}

