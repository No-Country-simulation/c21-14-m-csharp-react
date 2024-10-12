using Brickly.DTO.Validations;
using System.ComponentModel.DataAnnotations;

namespace Brickly.DTO.Register;

public class DocumentTypeDto
{
    [Required(ErrorMessage = "Por favor, ingresa una abreviatura.")]
    [StringLength(10, ErrorMessage = "La abreviatura no puede tener más de 10 caracteres.")]
    [CustomValidations.OnlyLetters(ErrorMessage = "La abreviatura solo debe contener letras.")]
    public string? Abbreviation { get; set; }

    [Required(ErrorMessage = "Por favor, ingresa el nombre del documento.")]
    [StringLength(100, ErrorMessage = "El nombre del documento no puede tener más de 100 caracteres.")]
    [CustomValidations.OnlyLetters(ErrorMessage = "El nombre del documento solo debe contener letras.")]
    public string? DocumentName { get; set; }
}

