using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;


namespace Brickly.DTO.Validations
{
    public class CustomValidations
    {
        // Validar solo letras
        public class OnlyLettersAttribute : ValidationAttribute
        {
            protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
            {
                // Verifica si el valor es una cadena
                if (value is string stringValue)
                {
                    // Verifica si el valor está vacío o solo contiene espacios
                    if (string.IsNullOrWhiteSpace(stringValue))
                    {
                        return new ValidationResult(ErrorMessage ?? "El campo es obligatorio y no puede estar vacío.");
                    }

                    // Expresión regular que permite letras (incluidas letras acentuadas) y espacios
                    var regex = new Regex(@"^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$");
                    if (!regex.IsMatch(stringValue))
                    {
                        return new ValidationResult(ErrorMessage ?? "El campo solo puede contener letras y espacios.");
                    }
                }

                return ValidationResult.Success!;
            }
        }

        // Validar solo números
        public class OnlyNumbersAttribute : ValidationAttribute
        {
            protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
            {
                var stringValue = value as string;

                if (string.IsNullOrWhiteSpace(stringValue))
                    return ValidationResult.Success!; // Permitir nulos o vacíos, ya que se puede validar con [Required]

                var regex = new Regex(@"^\d+$");
                if (regex.IsMatch(stringValue))
                    return ValidationResult.Success!;

                return new ValidationResult(ErrorMessage ?? "El campo solo puede contener números.");
            }
        }

        // Validar dominio de correo electrónico (solo Gmail, Hotmail, Outlook)
        public class EmailDomainAttribute : ValidationAttribute
        {
            protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
            {
                var email = value as string;
                if (string.IsNullOrWhiteSpace(email))
                    return ValidationResult.Success!; // Permitir nulos o vacíos, ya que se puede validar con [Required]

                var regex = new Regex(@"^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$");
                if (regex.IsMatch(email))
                    return ValidationResult.Success!;

                return new ValidationResult(ErrorMessage ?? "El correo electrónico debe ser de dominio Gmail, Hotmail o Outlook.");
            }
        }

        // Validar que la contraseña comience con una letra mayúscula
        public class MustStartWithUppercaseAttribute : ValidationAttribute
        {
            protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
            {
                if (value is string password)
                {
                    if (string.IsNullOrWhiteSpace(password))
                    {
                        return new ValidationResult(ErrorMessage ?? "La contraseña es obligatoria.");
                    }

                    if (!char.IsUpper(password[0]))
                    {
                        return new ValidationResult(ErrorMessage ?? "La contraseña debe comenzar con una letra mayúscula.");
                    }
                }

                return ValidationResult.Success!;
            }
        }
    }
}
