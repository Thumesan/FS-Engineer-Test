using System.Collections.Generic;

namespace FS_Engineer_Test.Models
{
    public class ChuckJokes
    {
        public IEnumerable<string> Categories { get; set; }
        public string CreatedAt { get; set; }
        public string Icon_url { get; set; }
        public string Id { get; set; }
        public string UpdatedAt { get; set; }
        public string Url { get; set; }
        public string Value { get; set; }

    }
}