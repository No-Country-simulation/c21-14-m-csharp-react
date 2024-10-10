using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Brickly.MODEL;
public partial class Country
{
    public ObjectId Id { get; set; }
    public string? Name { get; set; }
}

