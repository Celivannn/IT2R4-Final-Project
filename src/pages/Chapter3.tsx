
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LessonContent from '@/components/LessonContent';
import Navbar from '@/components/Navbar';
import { Separator } from "@/components/ui/separator";
import { Book, Clock } from "lucide-react";

const Chapter3 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-1 container max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Exile, Trial, and Death of Jose Rizal</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">The final chapter of a hero's journey</p>
        </div>

        <div className="mb-8">
          <div className="historical-card mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Introduction</h2>
            <Separator className="my-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="prose max-w-none">
                <p className="mb-4">In July 1892, Dr. José Rizal was exiled to Dapitan, Mindanao, by the Spanish authorities to silence his reformist and nationalist ideas. However, instead of allowing exile to defeat him, he turned Dapitan into a place of learning, service, and progress.</p>
                <p>Over the next four years (1892-1896), he dedicated himself to medicine, education, engineering, and community development, helping improve the lives of the locals. He also built a school, introduced modern agricultural techniques, and designed infrastructure projects. His time in Dapitan proved that true patriotism is not only about fighting for freedom but also about empowering people through knowledge and action, making this period one of the most inspiring chapters of his life.</p>
              </div>
              <div>
                <AspectRatio ratio={4/3} className="rounded-lg overflow-hidden">
                  <img 
                    src="/rizal-exile.jpg" 
                    alt="José Rizal during his exile in Dapitan" 
                    className="object-cover w-full h-full historical-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/800x600/e2e8f0/64748b?text=Rizal+in+Dapitan";
                    }}
                  />
                </AspectRatio>
                <p className="text-sm text-center mt-2 text-gray-600 italic">Rizal with students in Dapitan, where he established a school during his exile</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Book className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold text-gray-900">Lesson 1: Exile in Dapitan</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="Conditions of Rizal's Exile"
            content={
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                  <img 
                    src="/dapitan-exile.jpg" 
                    alt="Dapitan during Rizal's exile"
                    className="rounded-lg shadow-md w-full md:w-1/3 h-auto mb-4 md:mb-0 historical-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Dapitan+Exile";
                    }}
                  />
                  <div>
                    <p className="mb-4">When José Rizal arrived in Dapitan, the Spanish authorities and a priest named Fr. Pablo Pastells offered to set him free if he took back his criticisms of the Spanish government and the Catholic Church. They also wanted him to follow religious practices and be loyal to Spain.</p>
                    <p className="mb-4">However, Rizal refused because he believed that taking back his words would be a betrayal to his fellow Filipinos. Instead of giving in, he chose to stay in exile and focused on helping the people of Dapitan, showing his strong principles and love for his country.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="historical-card">
                    <h3 className="text-xl font-semibold mb-4">Rizal's Life Under Captain Carnicero</h3>
                    <p className="mb-4">During his exile, Rizal lived at the residence of Captain Ricardo Carnicero, the politico-military governor of Dapitan. Unlike a typical prisoner, he was treated with respect and kindness. This was due to Rizal's refusal to accept the strict religious conditions imposed by the Spanish clergy.</p>
                    <p>Despite his exile, he was given the freedom to interact with the locals and continue his humanitarian work.</p>
                  </div>
                  
                  <div className="historical-card">
                    <h3 className="text-xl font-semibold mb-4">Rizal's Relationship With Captain Carnicero</h3>
                    <p className="mb-4">Rizal and Captain Carnicero developed a close and respectful relationship. Carnicero recognized Rizal's intelligence and good character, allowing him complete freedom to roam Dapitan and even ride his favorite horse.</p>
                    <p>He also gave positive reports about Rizal to Spanish authorities. In gratitude, Rizal wrote a poem, "A Don Ricardo Carnicero," as a gift for the captain's birthday on August 26, 1892.</p>
                  </div>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Rizal's Impact and Legacy in Dapitan</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <p className="mb-4">Instead of treating exile as punishment, Rizal turned it into an opportunity to help the people of Dapitan. He introduced educational reforms, provided free medical care, improved infrastructure, and engaged in agricultural and scientific projects.</p>
                      <p>His time in Dapitan proved that patriotism is not just about fighting but also about uplifting people's lives through knowledge, service, and innovation.</p>
                    </div>
                    <div className="md:w-1/3">
                      <img 
                        src="/rizal-teaching.jpg" 
                        alt="Rizal teaching students in Dapitan"
                        className="rounded-lg w-full h-auto historical-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/400x300/e2e8f0/64748b?text=Rizal+Teaching";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: Exile in Dapitan</h3>
                <ul className="space-y-3">
                  <li>Rizal was exiled to Dapitan from 1892 to 1896 after being arrested in Hong Kong.</li>
                  <li>He refused to retract his criticisms of Spanish colonial rule, choosing integrity over freedom.</li>
                  <li>Captain Ricardo Carnicero treated Rizal with respect and allowed him considerable freedom.</li>
                  <li>Despite being in exile, Rizal transformed Dapitan through his medical practice, school, and infrastructure projects.</li>
                  <li>His exile demonstrated how one could serve the nation through peaceful means, even under difficult circumstances.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Religious Aspects of Rizal's Exile</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="historical-card">
                    <h4 className="font-semibold mb-2">Rizal's Debate on Religion</h4>
                    <p>In Dapitan, Rizal and Fr. Pastells engaged in intellectual debates about religion. Rizal, being critical of the abuses committed by friars, held an anti-clerical stance, while Pastells tried to bring him back to the faith. Despite intense discussions, neither was able to change the other's beliefs, highlighting Rizal's strong convictions and critical thinking.</p>
                  </div>
                  
                  <div className="historical-card">
                    <h4 className="font-semibold mb-2">Rizal and Fr. Pastells' Friendship</h4>
                    <p>Despite their religious differences, Rizal and Fr. Pastells remained good friends. Pastells gave Rizal a copy of "Imitation of Christ", a famous Catholic book, while Rizal gifted him a sculpted bust of St. Paul. Their mutual respect showed that intellectual disagreements did not affect their friendship.</p>
                  </div>
                  
                  <div className="historical-card">
                    <h4 className="font-semibold mb-2">Rizal's Personal Faith</h4>
                    <p>Although Rizal did not fully agree with Catholic doctrines, he continued to practice his faith in his own way. He attended mass and celebrated religious events, but his beliefs were based on rational inquiry rather than blind acceptance. His approach to faith reflected his deep intellect and philosophical mindset.</p>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Book className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold text-gray-900">Lesson 2: Life and Achievements in Dapitan</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="The Awakening of Dapitan"
            content={
              <div className="space-y-6">
                <div className="historical-card">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="mb-4">When Rizal arrived in Dapitan as a prisoner in July 1892, it was a quiet and sleepy town. However, through his efforts, Dapitan transformed into a progressive and lively place.</p>
                      <p>Instead of feeling defeated by his exile, Rizal maximized his time by engaging in various activities that benefited the town and its people.</p>
                    </div>
                    <div>
                      <img 
                        src="/dapitan-view.jpg" 
                        alt="View of Dapitan"
                        className="rounded-lg w-full h-auto historical-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Dapitan+View";
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Rizal's Productive Life in Dapitan</h3>
                  <p className="mb-4">During his exile, Rizal focused on improving his skills and helping the community. He dedicated himself to:</p>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Art and literature by writing and creating sculptures</li>
                    <li>Agricultural and civic projects to help improve local farming and infrastructure</li>
                    <li>Business activities to support the economy</li>
                    <li>Maintaining correspondence with his friends in Europe, such as Ferdinand Blumentritt and Reinhold Rost</li>
                  </ul>
                  
                  <p>Rizal's contributions showcased his versatility and dedication to the betterment of society.</p>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Rizal's Achievements in Dapitan</h3>
                  <p className="mb-4">Rizal's accomplishments spanned various fields, demonstrating his genius and dedication:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">Architecture and Engineering Works</h4>
                      <p>Designed waterworks and structures in Dapitan</p>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">The Doctor is "In"</h4>
                      <p>Provided free medical services to locals</p>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">Rivaling the Best in Europe</h4>
                      <p>Conducted scientific studies that matched European standards</p>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">From Lotto to Lot; Farmer to Trader</h4>
                      <p>Used lottery winnings to buy land for farming and trade</p>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">Once a Poet, Always a Poet</h4>
                      <p>Continued writing poetry</p>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">A Polyglot</h4>
                      <p>Mastered multiple languages</p>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">Inventions and Scientific Works</h4>
                      <p>Created innovative tools and studies</p>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">Tree of Knowledge</h4>
                      <p>Educated locals and established a school</p>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">The "Sweet Foreigner"</h4>
                      <p>Had a relationship with Josephine Bracken</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">A Talk in the Garden</h4>
                      <p>Held intellectual discussions with students and friends</p>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">Nails in the Coffin</h4>
                      <p>His exile further convinced him of Spanish oppression</p>
                    </div>
                  </div>
                </div>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: Achievements in Dapitan</h3>
                <ul className="space-y-3">
                  <li>Rizal won the Manila Lottery and used his winnings to purchase land in Talisay where he built a school, home, and clinic.</li>
                  <li>He treated hundreds of patients as an ophthalmologist, performing surgeries and providing medical care at little to no cost.</li>
                  <li>Rizal established a school for boys where he taught languages, mathematics, science, and physical education.</li>
                  <li>He implemented agricultural innovations and taught local farmers modern farming techniques.</li>
                  <li>During this period, Rizal corresponded with scientists worldwide and sent specimens of rare animals to European museums.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Josephine Bracken</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="mb-4">One of the most significant personal developments during Rizal's exile was his relationship with Josephine Bracken, an Irish-born woman who came to Dapitan seeking medical help for her adoptive father's eye condition.</p>
                    <p className="mb-4">Rizal and Josephine fell in love and lived together as husband and wife, though they could not officially marry because Rizal refused to return to Catholicism. Their relationship brought both joy and controversy to Rizal's life in exile.</p>
                    <p>The couple had a son who was born prematurely and died shortly after birth. Despite this tragedy and the difficulties of their circumstances, Josephine remained devoted to Rizal until his execution.</p>
                  </div>
                  <div>
                    <img 
                      src="/josephine-bracken.jpg" 
                      alt="Josephine Bracken"
                      className="rounded-lg w-full h-auto historical-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/400x500/e2e8f0/64748b?text=Josephine+Bracken";
                      }}
                    />
                    <p className="text-sm text-center mt-2 text-gray-600 italic">Josephine Bracken, Rizal's partner during his exile in Dapitan</p>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Book className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold text-gray-900">Lesson 3: Rizal's Final Journey</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="Leaving Dapitan"
            content={
              <div className="space-y-6">
                <div className="historical-card">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="mb-4">On August 30, 1896, Luzon's eight provinces were placed under martial law as the revolution erupted. Despite this, Governor-General Blanco praised Rizal's conduct in Dapitan and gave him letters of recommendation for Spanish officials in Cuba, proving he had no ties to the uprising.</p>
                      <p>On September 3, 1896, Rizal boarded the Isla de Panay. Captain Alemany welcomed him and gave him the best cabin. Rizal wrote to his mother, assuring her of his good health and safety. He comforted his family, saying "everything is in the hands of Divine Providence."</p>
                    </div>
                    <div>
                      <img 
                        src="/rizal-departure.jpg" 
                        alt="Rizal's departure from Dapitan"
                        className="rounded-lg w-full h-auto historical-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Rizal's+Departure";
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Last Voyage to Spain</h3>
                  <p className="mb-4">Rizal was assigned cabin No. 22 and left for Spain, stopping near Manila. Among the passengers were Pedro Roxas, Maria Tuason, and Pedro Paterno. He believed he was heading to Cuba as a doctor, but this journey would ultimately lead to his tragic fate.</p>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                    <h4 className="font-semibold mb-2">Dangerous Filipino</h4>
                    <p>Rizal was unaware that, upon his departure from Manila Bay, Spanish officials had already conspired against him. Governor-General Blanco and the Ministers of War and Colonies labeled him a "Dangerous Filipino" and sent secret telegrams ordering his arrest upon arrival in Barcelona.</p>
                    <p>Although Rizal had no involvement in the revolution, he remained under Spanish surveillance.</p>
                  </div>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Rumors and Deception</h3>
                  <p className="mb-4">During his journey to Spain, Rizal heard shocking news from passengers: Manila was in turmoil, and Spanish forces were executing Filipinos. He also learned that he was being falsely implicated in the revolution. A young student informed him about the atrocities happening in Cavite. Disturbed by these reports, Rizal wrote to his close friend Ferdinand Blumentritt, expressing his frustration and disbelief at the unfolding events.</p>
                  
                  <h4 className="text-lg font-semibold mb-2">Rizal's Letter and New Orders</h4>
                  <p className="mb-4">Rizal, deeply troubled, wrote a letter on September 28, 1896, to Blumentritt, expressing his shock at being accused of involvement in the revolution. The next day, Captain Alemany instructed him to remain in his cabin until further orders from Manila.</p>
                  <p>When Rizal reached Barcelona on October 3, 1896, he was no longer under the custody of the ship's captain but was handed over to General Eulogio Despujol—the very same man who had ordered his exile to Dapitan four years earlier.</p>
                </div>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: Rizal's Final Journey</h3>
                <ul className="space-y-3">
                  <li>Rizal was granted permission to serve as a doctor in Cuba during the Cuban War of Independence.</li>
                  <li>He left Dapitan on September 3, 1896, unaware that the Philippine Revolution had begun in August.</li>
                  <li>Although Governor-General Blanco gave Rizal a safe conduct pass, secret orders were sent to arrest him in Barcelona.</li>
                  <li>While onboard the ship, Rizal learned he was being implicated in the revolution despite his non-involvement.</li>
                  <li>Upon reaching Barcelona, Rizal was arrested and held at Montjuich Castle before being sent back to Manila.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Imprisonment and Return to Manila</h3>
                <div className="space-y-4">
                  <p>Rizal was placed under arrest and imprisoned in Montjuich Castle in Barcelona for three days. Later that evening, he was transferred to the ship Colon, which was filled with soldiers, officers, and their families. The ship was bound for Manila via Singapore.</p>
                  
                  <p>Despite being a prisoner, Rizal was allowed to move freely while at sea, but security tightened whenever the ship approached a port. As the ship neared land, Rizal was subjected to more restrictions. Spanish officers confiscated his diary and examined it for any incriminating content, but they found nothing suspicious.</p>
                  
                  <p>He was handcuffed twice during the voyage. Sixteen hours before arriving in Singapore—the last stop before Manila—Rizal was once again placed behind bars, as Spanish authorities prepared for his return to the Philippines.</p>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                    <h4 className="font-semibold mb-2">Last Attempt to Save the Hero</h4>
                    <p>Rizal's friends in Europe tried to save him by seeking legal action in Singapore, but their efforts failed due to legal technicalities. Even an Englishwoman sought help from Spain's Queen Regent, but Rizal remained unaware of these attempts.</p>
                    <p>In the end, he was sent back to Manila to face trial, which historian Ambeth Ocampo described as a "kangaroo court that sentenced him to death."</p>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Book className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold text-gray-900">Lesson 4: Trial and Death</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="Thrilla in Manila"
            content={
              <div className="space-y-6">
                <div className="historical-card">
                  <p className="mb-4">When Rizal arrived in Manila on November 3, 1896, the Spanish authorities celebrated his capture, seeing it as a victory. Meanwhile, Manila was in chaos due to the ongoing revolution, and the new Governor-General, Camilo de Polavieja, took a harsher approach by ordering public executions to spread fear.</p>
                  <p>Filipinos linked to Rizal were arrested and tortured, including his brother Paciano, but they remained resilient despite the brutal treatment.</p>
                  <div className="mt-4">
                    <img 
                      src="/rizal-prison.jpg" 
                      alt="Rizal in prison"
                      className="rounded-lg w-full h-auto historical-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/800x400/e2e8f0/64748b?text=Rizal+in+Prison";
                      }}
                    />
                    <p className="text-sm text-center mt-2 text-gray-600 italic">A historical depiction of Rizal in his prison cell</p>
                  </div>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Fishing for Evidence</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>The preliminary investigation on Rizal began on November 20, 1896, lasting five days.</li>
                    <li>Rizal was accused before Judge Advocate Colonel Francisco Olive.</li>
                    <li>He was interrogated without knowing who testified against him.</li>
                    <li>Two types of evidence were presented: documentary and testimonial.</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4">Prosecution's Case</h3>
                  <p className="mb-4">The prosecution presented 15 documents against Rizal. These documents aimed to prove his involvement in the revolution.</p>
                  
                  <h4 className="text-lg font-semibold mb-2">Key Evidence Against Rizal</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Letter from Antonio Luna to Mariano Ponce proving Rizal helped organize La Solidaridad.</li>
                    <li>Letter from Rizal to his sister (1890) mentioning the Illustrados' exile and its impact.</li>
                    <li>A poem, "Kundiman," calling for liberty, falsely attributed to Rizal.</li>
                    <li>A Masonic document supporting revolutionary ideals.</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-2">More Evidence Against Rizal</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Letter from Rizal (1892) about preparing a safe refuge in Borneo.</li>
                    <li>Speech by Emilio Jacinto mentioning Rizal in a revolutionary context.</li>
                    <li>Poem "Hymn to Talisay" written by Rizal for his students, seen as inspiring rebellion.</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-2">Weak Testimonies Against Rizal</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Some documents and testimonies were weak or unreliable.</li>
                    <li>Pio Valenzuela stated that Rizal was against the revolution.</li>
                    <li>Other witnesses falsely claimed Rizal was angry about the revolution or planned an escape.</li>
                  </ul>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Formal Charges Against Rizal</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>On December 11, 1896, Rizal was formally charged.</li>
                    <li>He was accused of being the leader of the Philippine Revolution.</li>
                    <li>Authorities claimed he founded secret societies and spread revolutionary propaganda.</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4">Rizal's Defense</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>On December 15, 1896, Rizal wrote a manifesto.</li>
                    <li>He denied involvement in the revolution.</li>
                    <li>He encouraged Filipinos to focus on education, industry, and peaceful reforms instead of armed rebellion.</li>
                  </ul>
                </div>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: Trial and Prosecution</h3>
                <ul className="space-y-3">
                  <li>Rizal's trial began on December 26, 1896, and was conducted by a military court rather than a civilian one.</li>
                  <li>The trial was rushed and procedurally flawed, with Rizal given little time to prepare his defense.</li>
                  <li>Evidence against Rizal was largely circumstantial, consisting of his writings and testimonies from people who were often coerced.</li>
                  <li>Rizal was defended by Lt. Luis Taviel de Andrade, a Spanish officer, but the defense had little chance of success.</li>
                  <li>Throughout the trial, Rizal maintained his innocence and his opposition to violent revolution.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">The "Kangaroo Trial"</h3>
                <p className="mb-4">On December 26, 1896, José Rizal was taken under heavy guard to Cuartel de España, where he faced a military trial. The trial was led by Lt. Col. José Togores Arjona, and several Spanish military officers were present, including Captains Ricardo Muñoz Arias, Manuel Reguera, Santiago Izquierdo Osorio, and Manuel Díaz Becerra. The courtroom was filled with Spanish officials and spectators, including the prosecuting attorney, Capt. Rafael Domínguez, and Judge Advocate Colonel Francisco Olive, who had previously handled Rizal's preliminary investigation.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="historical-card">
                    <h4 className="font-semibold mb-2">Limited Legal Defense</h4>
                    <p>Rizal was not given the right to choose his own lawyer and was instead assigned a Spanish military officer, Lt. Luis Taviel de Andrade, as his defense attorney. This was a bitter irony, as Taviel de Andrade was the brother of Rizal's former bodyguard during his peaceful exile in Dapitan. The defense attorney reviewed the charges and recognized that Rizal was already being treated as guilty before the trial even began.</p>
                  </div>
                  
                  <div className="historical-card">
                    <h4 className="font-semibold mb-2">The Trial Begins</h4>
                    <p>The trial formally started with Judge Advocate Dominguez presenting testimonies and fabricated evidence against Rizal. Witnesses, many of whom had been pressured or tortured, falsely accused Rizal of inspiring the Philippine Revolution. The Spanish prosecution aimed to frame Rizal as the mastermind behind the rebellion, despite the lack of direct evidence linking him to the revolutionary activities of the Katipunan.</p>
                  </div>
                </div>
                
                <div className="historical-card mt-4">
                  <h4 className="font-semibold mb-2">Rizal's Defense - The 12 Points of Innocence</h4>
                  <p className="mb-4">Despite the unfair circumstances, Rizal courageously defended himself with 12 key arguments proving his innocence:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Pío Valenzuela testified that Rizal was against rebellion and preferred peaceful reforms.</li>
                    <li>He never wrote a letter supporting or endorsing the Katipunan.</li>
                    <li>He was not a member of the Katipunan and never took part in its plans.</li>
                    <li>If he were guilty, he would not have returned from his exile in Dapitan.</li>
                    <li>The revolutionaries never consulted him regarding their plans.</li>
                    <li>His organization, the Liga Filipina, aimed for peaceful reforms, not rebellion.</li>
                    <li>The Liga Filipina failed shortly after its creation, proving it was not a revolutionary movement.</li>
                    <li>He never had a revolutionary agenda when he founded the Liga Filipina.</li>
                    <li>Spanish authorities had misinterpreted his personal letters.</li>
                    <li>He never owned properties related to the revolution or rebellion.</li>
                    <li>His educational and medical work in the Philippines showed his true intentions of helping Filipinos.</li>
                    <li>There was no solid evidence linking him directly to the uprising.</li>
                  </ol>
                </div>
              </div>
            }
          />
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Book className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold text-gray-900">Lesson 5: Execution and Legacy</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="Biased Verdict & Death Sentence"
            content={
              <div className="space-y-6">
                <div className="historical-card">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="mb-4">Despite Rizal's well-argued defense, the Spanish military court ignored all evidence of his innocence. The judges, who were biased against him from the start, found him guilty of rebellion and sedition.</p>
                      <p>The verdict was quickly sent to Governor-General Camilo de Polavieja, who was determined to make an example of Rizal. Without hesitation, he confirmed the death sentence and scheduled the execution.</p>
                    </div>
                    <div>
                      <img 
                        src="/polavieja.jpg" 
                        alt="Governor-General Camilo de Polavieja"
                        className="rounded-lg w-full h-auto historical-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/400x500/e2e8f0/64748b?text=Camilo+de+Polavieja";
                        }}
                      />
                      <p className="text-sm text-center mt-2 text-gray-600 italic">Governor-General Camilo de Polavieja who confirmed Rizal's death sentence</p>
                    </div>
                  </div>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Execution Order</h3>
                  <p className="mb-4">On December 28, 1896, Governor-General Polavieja officially signed the order for Rizal's execution by firing squad. The execution was set for the morning of December 30, 1896, at Bagumbayan (now known as Luneta Park in Manila). Despite public outcry and last-minute appeals for clemency, Rizal's fate was sealed. His trial, widely considered unjust and politically motivated, became one of the most infamous moments in Philippine history.</p>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Alone in the Cell</h3>
                  <p className="mb-4">After being sentenced to death on December 30, 1896, Rizal calmly accepted his fate. On the morning of December 29, he received official notice of his execution. He was then moved to the prison chapel, where he spent his final hours. Rizal wrote farewell letters to his loved ones, conversed with his closest friends, and received many visitors. Between noon and 3:00 PM, he was left alone in his cell. He ate his last meal and wrote his final letter to his best friend, Ferdinand Blumentritt, expressing his peaceful acceptance of his fate.</p>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Last Masterpiece</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                      <p className="mb-4">Rizal's family defied orders and visited him before his execution. His sisters refused to let the Spaniards take his body and fought for his dignity. Rizal distributed personal belongings to each family member, giving keepsakes like a watch, handkerchief, and a lamp containing his hidden last poem.</p>
                      <p>After his death, his sisters retrieved the lamp and discovered the poem Mi Último Adiós inside. The poem, which was secretly written during his imprisonment, became a powerful symbol of patriotism and sacrifice. Financial support from his friend Trinidad H. Pardo de Tavera ensured the poem's publication and distribution.</p>
                    </div>
                    <div>
                      <img 
                        src="/mi-ultimo-adios.jpg" 
                        alt="Mi Último Adiós manuscript"
                        className="rounded-lg w-full h-auto historical-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/400x500/e2e8f0/64748b?text=Mi+Último+Adiós";
                        }}
                      />
                      <p className="text-sm text-center mt-2 text-gray-600 italic">Manuscript of "Mi Último Adiós" (My Last Farewell)</p>
                    </div>
                  </div>
                </div>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: Execution and Final Hours</h3>
                <ul className="space-y-3">
                  <li>Rizal was sentenced to death on December 28, 1896, and executed by firing squad on December 30, 1896.</li>
                  <li>He spent his final hours in the Fort Santiago prison, writing letters to family members and composing his final poem.</li>
                  <li>During his last night, he wrote "Mi Último Adiós" (My Last Farewell) which he hid in an alcohol stove and gave to his sister.</li>
                  <li>Rizal requested to face the firing squad, but authorities denied this and had him shot in the back.</li>
                  <li>His last words were reported to be "Consummatum est" (It is finished), the same words spoken by Jesus Christ on the cross.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Rizal's Last Hours</h3>
                <p className="mb-4">Before being sentenced to death, Rizal spent his final days preparing himself for the inevitable. Family and friends visited him, but it was in solitude that Rizal wrote his final masterpiece, Mi Ultimo Adios (My Last Farewell). His last day unfolded as follows:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">December 29, 1896</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><b>6:00 A.M.</b> - Rizal was read with his death sentence and prepared for his final moments.</li>
                      <li><b>7:00 A.M.</b> - He was moved to the prison chapel and visited by Jesuit priests and teachers from Ateneo.</li>
                      <li><b>8:00 A.M.</b> - Rizal had his last breakfast with Fr. Antonio Rosell, after which his defense lawyer, Lt. Taviel de Andrade, visited him.</li>
                      <li><b>9:00 A.M.</b> - Fr. Frederico Faura arrived, reminding Rizal of his prophecy that he would lose his head for writing Noli Me Tangere.</li>
                      <li><b>12:00 P.M. - 3:30 P.M.</b> - Rizal was left alone in his cell, where he continued writing his farewell poem, which he secretly hid in an alcohol cooking stove.</li>
                      <li><b>4:00 P.M.</b> - Rizal's mother, Doña Teodora Alonzo, visited him for an emotional farewell. She was given Rizal's final gift - a religious book, Imitation of Christ.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">December 29-30, 1896</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><b>6:00 P.M.</b> - Rizal had his last supper, where he forgave his enemies, including the military judges.</li>
                      <li><b>9:30 P.M.</b> - Rizal was visited by Don Gaspar Cestaño, fiscal of the Royal Audience of Manila.</li>
                      <li><b>December 30, 3:00 A.M.</b> - He heard Mass, took communion, and wrote his final letters.</li>
                      <li><b>6:00 A.M.</b> - He wrote his last letters to his family before marching to Bagumbayan.</li>
                      <li><b>7:03 A.M.</b> - Rizal was executed by firing squad at Bagumbayan (now Luneta Park).</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6">
                  <img 
                    src="/rizal-execution.jpg" 
                    alt="Rizal's execution"
                    className="rounded-lg w-full h-auto historical-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/800x400/e2e8f0/64748b?text=Rizal's+Execution";
                    }}
                  />
                  <p className="text-sm text-center mt-2 text-gray-600 italic">Historical depiction of Rizal's execution at Bagumbayan</p>
                </div>
                
                <div className="mt-6 bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <h4 className="font-semibold mb-2 text-center text-amber-900">Rizal's Legacy</h4>
                  <p className="mb-4 text-center italic">"The pen is mightier than the sword, but courage fuels the revolution."</p>
                  <p className="mb-4">As the execution took place, the Spanish soldiers shouted, "Viva España! Muerte a los traidores!" ("Long live Spain! Death to the traitors!"), but the Filipino crowd remained silent, refusing to echo the cheers of their colonizers. The silence that followed was more powerful than any words—an unspoken protest against the injustice of Rizal's death.</p>
                  <p className="mb-4">Rizal's final moments were not just the end of a man's life but the beginning of a revolution. His execution ignited a fire in the hearts of the Filipino people, strengthening their resolve to fight for independence. The shot that ended his life was also the shot that would shatter Spain's grip on the Philippines.</p>
                  <p>Though the Spanish authorities had hoped that Rizal's death would put an end to the growing resistance, it had the opposite effect. Instead of silencing the revolution, it became the catalyst that inspired Filipinos to continue the struggle for freedom. His martyrdom transformed him into a national symbol—proof that even in death, his ideals would live on.</p>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Chapter3;
