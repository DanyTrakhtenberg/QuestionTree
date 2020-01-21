using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuestionTree.Model;

namespace QuestionTree.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionTreeController : ControllerBase
    {
        // GET: api/QuestionTree
        [HttpGet]
        public QuestionNode Get()
        {
            QuestionNode questionNode = new QuestionNode()
            {

                Answer = "",
                Question = "Do you want to be a great programmer?",
                FollowUpQuestions = new List<QuestionNode>()
                 {
                     new QuestionNode(){Answer = "Of courses i do" , Question = "What do you do to become one?" , FollowUpQuestions = new List<QuestionNode>(){

                             new QuestionNode(){Answer = "Reading books" , Question="What books?", FollowUpQuestions = new List<QuestionNode>(){
                                      new QuestionNode(){Answer = "C# for beginners" , Question="You are going to be a master at C#" },
                                      new QuestionNode(){Answer = "Angular for advanced" , Question="good for you, you going to make a lot of money in this business" },


                             } },
                              new QuestionNode(){Answer = "Watching on-line courses" , Question="Which ones?" ,FollowUpQuestions = new List<QuestionNode>(){
                                      new QuestionNode(){Answer = "Saving private public" , Question="You are going to be a master at access modifiers" },
                                      new QuestionNode(){Answer = "Angular routing" , Question="You should watch some testing videos first " },


                             }},
                              new QuestionNode(){Answer = "Googling Stack overflow Q&A" , Question="This is cool, you are on the right track to be an expert Googler"}


                    } },
                      new QuestionNode() { Answer = "Not so much, i like watching the Vikings more " , Question = "Keep watching, it is a cool show"}

                 }

            };

            return questionNode;
        }

        // GET: api/QuestionTree/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/QuestionTree
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/QuestionTree/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
