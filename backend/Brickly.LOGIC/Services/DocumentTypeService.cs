using AutoMapper;
using Brickly.DAL.Repository.Contract;
using Brickly.DTO;
using Brickly.LOGIC.Services.Contract.DocumentTypeService;
using Brickly.MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Brickly.LOGIC.Services
{
    public class DocumentTypeService : IDocumentTypeService
    {
        private readonly IGenericRepository<DocumentType> repository;
        private readonly IMapper mapper;

        public DocumentTypeService(IGenericRepository<DocumentType> repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        public async Task<DocumentTypeDto> CreateDocumentTypeAsync(DocumentTypeDto documentTypeDto)
        {
            // Lógica para crear el tipo de documento
            var documentType = mapper.Map<DocumentType>(documentTypeDto);
            await repository.CreateAsync(documentType);
            return mapper.Map<DocumentTypeDto>(documentType); // Devuelve el DTO creado
        }
    }
}
