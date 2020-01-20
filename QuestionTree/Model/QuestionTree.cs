using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuestionTree.Model
{
    public class QuestionNode
    {
        [JsonProperty("question")]
        public string Question { get; set; }
        [JsonProperty("answer")]

        public string Answer { get; set; }
        [JsonProperty("followUpQuestions")]

        public List<QuestionNode> FollowUpQuestions { get; set; }

    }
}
