using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ProductService.Models
{
    public class Product
    {
        [Key]
        public int Id { get; init; }
        public string Name { get; init; }
        public float Price { get; init; }

        [JsonPropertyName("image")]
        public string ImageLink { get; init; }
    }
}