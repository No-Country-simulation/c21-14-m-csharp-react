using AutoMapper;
using Brickly.DAL.Repository.Contract;
using Brickly.DTO;
using Brickly.LOGIC.Services.Contract.DocumentTypeService;
using Brickly.MODEL;

namespace Brickly.LOGIC.Services {
    public class DocumentTypeService : IDocumentTypeService {
        private readonly IGenericRepository<DocumentType> repository;
        private readonly IMapper mapper;

        public DocumentTypeService(IGenericRepository<DocumentType> repository, IMapper mapper) {
            this.repository = repository;
            this.mapper = mapper;
        }

        public async Task<DocumentTypeDto> CreateDocumentTypeAsync(DocumentTypeDto documentTypeDto) {
            try {
                // Validar si el DTO recibido es nulo o tiene datos no válidos
                if (documentTypeDto == null) {
                    throw new ArgumentNullException(nameof(documentTypeDto), "The DTO of the document type cannot be null");
                }

                // Validar que el nombre del tipo de documento no esté vacío o nulo
                if (string.IsNullOrEmpty(documentTypeDto.DocumentName)) {
                    throw new ArgumentException("The document type name is required");
                }

                // Mapeo del DTO al modelo de datos
                var documentType = mapper.Map<DocumentType>(documentTypeDto);

                // Creación del tipo de documento en la base de datos
                await repository.CreateAsync(documentType);

                // Devolver el DTO del tipo de documento creado
                return mapper.Map<DocumentTypeDto>(documentType);
            }
            catch (ArgumentNullException ex) {
                // Manejo específico si el DTO es nulo
                throw new ApplicationException("The document type could not be created: the data provided is not valid.", ex);
            }
        }
    }
}
