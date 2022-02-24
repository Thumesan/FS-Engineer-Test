using System.Collections.Generic;

namespace FS_Engineer_Test.Models
{
    public class ChuckSearchResponse
    {
        public int Total { get; set; }
        public IEnumerable<ChuckJokes> Result { get; set; }
    }
}
