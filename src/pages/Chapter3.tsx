
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LessonContent from '@/components/LessonContent';
import Navbar from '@/components/Navbar';
import { Separator } from "@/components/ui/separator";
import { Book, Lock, Gavel, Flag, UserX } from "lucide-react";
import { Card } from "@/components/ui/card";

const Chapter3 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/subtle-paper.png')] bg-repeat">
      <Navbar />
      
      <div className="flex-1 container max-w-7xl mx-auto py-8 px-4">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">Exile, Trial, and Death</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-serif">Rizal's Final Chapter: From Dapitan to Immortality</p>
        </div>

        {/* Introduction Section */}
        <div className="mb-16">
          <div className="historical-card p-8 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-lg border border-amber-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold mb-4 font-serif text-amber-900">Introduction</h2>
                <p className="mb-4 text-lg">
                  In July 1892, Dr. José Rizal was exiled to Dapitan, Mindanao, by the Spanish authorities to silence his reformist and nationalist ideas.
                  However, instead of allowing exile to defeat him, he turned Dapitan into a place of learning, service, and progress.
                </p>
                <p className="mb-4 text-lg">
                  Over the next four years (1892-1896), he dedicated himself to medicine, education, engineering, and community development, 
                  helping improve the lives of the locals. He also built a school, introduced modern agricultural techniques, and designed infrastructure projects.
                </p>
                <p className="text-lg">
                  His time in Dapitan proved that true patriotism is not only about fighting for freedom but also about empowering people through knowledge and action, 
                  making this period one of the most inspiring chapters of his life.
                </p>
              </div>
              <div>
                <AspectRatio ratio={4/3} className="rounded-lg overflow-hidden border-4 border-amber-700">
                  <img
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                    alt="Scenic view of Dapitan"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-sm text-center mt-2 text-gray-600 italic">Dapitan's scenic landscape, where Rizal spent his exile years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Conditions of Exile */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Lock className="h-6 w-6 text-amber-800" />
            <h2 className="text-3xl font-bold font-serif text-amber-900">Conditions of Rizal's Exile</h2>
            <Separator className="flex-1 bg-amber-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
              <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">The Terms of Confinement</h3>
              <p className="mb-4 text-lg">
                When José Rizal arrived in Dapitan, the Spanish authorities and a priest named Fr. Pablo Pastells offered to set him free if he took back his criticisms of the Spanish government and the Catholic Church. They also wanted him to follow religious practices and be loyal to Spain.
              </p>
              <p className="text-lg">
                However, Rizal refused because he believed that taking back his words would be a betrayal to his fellow Filipinos. Instead of giving in, he chose to stay in exile and focused on helping the people of Dapitan, showing his strong principles and love for his country.
              </p>
            </div>

            <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
              <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Rizal's Life Under Captain Carnicero</h3>
              <p className="mb-4 text-lg">
                During his exile, Rizal lived at the residence of Captain Ricardo Carnicero, the politico-military governor of Dapitan. Unlike a typical prisoner, he was treated with respect and kindness. This was due to Rizal's refusal to accept the strict religious conditions imposed by the Spanish clergy.
              </p>
              <p className="text-lg">
                Despite his exile, he was given the freedom to interact with the locals and continue his humanitarian work. Rizal and Captain Carnicero developed a close and respectful relationship. Carnicero recognized Rizal's intelligence and good character, allowing him complete freedom to roam Dapitan and even ride his favorite horse.
              </p>
            </div>
          </div>

          <div className="mt-8 historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-2">
                <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Rizal's Impact and Legacy in Dapitan</h3>
                <p className="mb-4 text-lg">
                  Instead of treating exile as punishment, Rizal turned it into an opportunity to help the people of Dapitan. He introduced educational reforms, provided free medical care, improved infrastructure, and engaged in agricultural and scientific projects.
                </p>
                <p className="text-lg">
                  His time in Dapitan proved that patriotism is not just about fighting but also about uplifting people's lives through knowledge, service, and innovation. In gratitude for the kindness shown to him, Rizal wrote a poem, "A Don Ricardo Carnicero," as a gift for the captain's birthday on August 26, 1892.
                </p>
              </div>
              <div className="col-span-1">
                <AspectRatio ratio={3/4} className="rounded-lg overflow-hidden border-4 border-amber-700">
                  <img
                    src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Historic Building in Dapitan"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-sm text-center mt-2 text-gray-600 italic">Captain Carnicero's residence where Rizal stayed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Religious Debates */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Book className="h-6 w-6 text-amber-800" />
            <h2 className="text-3xl font-bold font-serif text-amber-900">Religious Debates and Personal Faith</h2>
            <Separator className="flex-1 bg-amber-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
              <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Rizal's Debate on Religion</h3>
              <p className="mb-4 text-lg">
                In Dapitan, Rizal and Fr. Pastells engaged in intellectual debates about religion. Rizal, being critical of the abuses committed by friars, held an anti-clerical stance, while Pastells tried to bring him back to the faith.
              </p>
              <p className="text-lg">
                Despite intense discussions, neither was able to change the other's beliefs, highlighting Rizal's strong convictions and critical thinking.
              </p>
            </div>

            <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
              <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Rizal and Fr. Pastells' Friendship</h3>
              <p className="mb-4 text-lg">
                Despite their religious differences, Rizal and Fr. Pastells remained good friends. Pastells gave Rizal a copy of "Imitation of Christ", a famous Catholic book, while Rizal gifted him a sculpted bust of St. Paul.
              </p>
              <p className="text-lg">
                Their mutual respect showed that intellectual disagreements did not affect their friendship.
              </p>
            </div>

            <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
              <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Rizal's Personal Faith</h3>
              <p className="mb-4 text-lg">
                Although Rizal did not fully agree with Catholic doctrines, he continued to practice his faith in his own way. He attended mass and celebrated religious events, but his beliefs were based on rational inquiry rather than blind acceptance.
              </p>
              <p className="text-lg">
                His approach to faith reflected his deep intellect and philosophical mindset.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: The Awakening of Dapitan */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Flag className="h-6 w-6 text-amber-800" />
            <h2 className="text-3xl font-bold font-serif text-amber-900">The Awakening of Dapitan</h2>
            <Separator className="flex-1 bg-amber-800" />
          </div>

          <div className="historical-card p-8 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-lg border border-amber-700 mb-8">
            <div className="text-center mb-6">
              <h3 className="font-serif text-3xl font-bold mb-4 text-amber-900">A Town Transformed</h3>
              <p className="text-xl">
                When Rizal arrived in Dapitan as a prisoner in July 1892, it was a quiet and sleepy town. However, through his efforts, Dapitan transformed into a progressive and lively place. Instead of feeling defeated by his exile, Rizal maximized his time by engaging in various activities that benefited the town and its people.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-xl font-bold mb-4 text-amber-900">Rizal's Productive Life in Dapitan</h4>
                <p className="mb-4 text-lg">
                  During his exile, Rizal focused on improving his skills and helping the community. He dedicated himself to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Art and literature by writing and creating sculptures</li>
                  <li>Agricultural and civic projects to help improve local farming and infrastructure</li>
                  <li>Business activities to support the economy</li>
                  <li>Maintaining correspondence with his friends in Europe, such as Ferdinand Blumentritt and Reinhold Rost</li>
                </ul>
                <p className="mt-4 text-lg">
                  Rizal's contributions showcased his versatility and dedication to the betterment of society.
                </p>
              </div>

              <div>
                <AspectRatio ratio={4/3} className="rounded-lg overflow-hidden border-4 border-amber-700">
                  <img
                    src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                    alt="Dapitan landscape"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-sm text-center mt-2 text-gray-600 italic">The landscape of Dapitan that Rizal helped transform</p>
              </div>
            </div>
          </div>

          <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
            <h3 className="font-serif text-2xl font-bold mb-4 text-center text-amber-900">Rizal's Achievements in Dapitan</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">1. Architecture and Engineering Works</h4>
                  <p>Designed waterworks and structures in Dapitan</p>
                </div>
                
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">2. The Doctor is "In"</h4>
                  <p>Provided free medical services to locals</p>
                </div>
                
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">3. Rivaling the Best in Europe</h4>
                  <p>Conducted scientific studies that matched European standards</p>
                </div>
                
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">4. From Lotto to Lot; Farmer to Trader</h4>
                  <p>Used lottery winnings to buy land for farming and trade</p>
                </div>
                
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">5. Once a Poet, Always a Poet</h4>
                  <p>Continued writing poetry</p>
                </div>
                
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">6. A Polyglot</h4>
                  <p>Mastered multiple languages</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">7. Inventions and Scientific Works</h4>
                  <p>Created innovative tools and studies</p>
                </div>
                
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">8. Tree of Knowledge</h4>
                  <p>Educated locals and established a school</p>
                </div>
                
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">9. The "Sweet Foreigner"</h4>
                  <p>Had a relationship with Josephine Bracken</p>
                </div>
                
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">10. A Talk in the Garden</h4>
                  <p>Held intellectual discussions with students and friends</p>
                </div>
                
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">11. Nails in the Coffin</h4>
                  <p>His exile further convinced him of Spanish oppression</p>
                </div>
                
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">12. The Trap is Laid</h4>
                  <p>Spanish authorities continued monitoring him, setting the stage for his final arrest</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Rizal's Final Journey */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <UserX className="h-6 w-6 text-amber-800" />
            <h2 className="text-3xl font-bold font-serif text-amber-900">Rizal's Final Journey</h2>
            <Separator className="flex-1 bg-amber-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
              <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Leaving Dapitan</h3>
              <p className="mb-4 text-lg">
                On August 30, 1896, Luzon's eight provinces were placed under martial law as the revolution erupted. Despite this, Governor-General Blanco praised Rizal's conduct in Dapitan and gave him letters of recommendation for Spanish officials in Cuba, proving he had no ties to the uprising.
              </p>
              <p className="mb-4 text-lg">
                On September 3, 1896, Rizal boarded the Isla de Panay. Captain Alemany welcomed him and gave him the best cabin. Rizal wrote to his mother, assuring her of his good health and safety. He comforted his family, saying "everything is in the hands of Divine Providence."
              </p>
              <p className="text-lg">
                Rizal was assigned cabin No. 22 and left for Spain, stopping near Manila. Among the passengers were Pedro Roxas, Maria Tuason, and Pedro Paterno. He believed he was heading to Cuba as a doctor, but this journey would ultimately lead to his tragic fate.
              </p>
            </div>

            <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
              <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Dangerous Filipino</h3>
              <p className="mb-4 text-lg">
                Rizal was unaware that, upon his departure from Manila Bay, Spanish officials had already conspired against him. Governor-General Blanco and the Ministers of War and Colonies labeled him a "Dangerous Filipino" and sent secret telegrams ordering his arrest upon arrival in Barcelona.
              </p>
              <p className="mb-4 text-lg">
                Although Rizal had no involvement in the revolution, he remained under Spanish surveillance. During his journey to Spain, Rizal heard shocking news from passengers: Manila was in turmoil, and Spanish forces were executing Filipinos. He also learned that he was being falsely implicated in the revolution.
              </p>
              <p className="text-lg">
                A young student informed him about the atrocities happening in Cavite. Disturbed by these reports, Rizal wrote to his close friend Ferdinand Blumentritt, expressing his frustration and disbelief at the unfolding events.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
              <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Rizal's Letter and New Orders</h3>
              <p className="mb-4 text-lg">
                Rizal, deeply troubled, wrote a letter on September 28, 1896, to Blumentritt, expressing his shock at being accused of involvement in the revolution. The next day, Captain Alemany instructed him to remain in his cabin until further orders from Manila.
              </p>
              <p className="mb-4 text-lg">
                When Rizal reached Barcelona on October 3, 1896, he was no longer under the custody of the ship's captain but was handed over to General Eulogio Despujol—the very same man who had ordered his exile to Dapitan four years earlier.
              </p>
              <p className="text-lg">
                Rizal was placed under arrest and imprisoned in Montjuich Castle in Barcelona for three days. Later that evening, he was transferred to the ship Colon, which was filled with soldiers, officers, and their families. The ship was bound for Manila via Singapore.
              </p>
            </div>

            <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
              <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Final Days of Travel</h3>
              <p className="mb-4 text-lg">
                As the ship neared land, Rizal was subjected to more restrictions. Spanish officers confiscated his diary and examined it for any incriminating content, but they found nothing suspicious. He was handcuffed twice during the voyage.
              </p>
              <p className="mb-4 text-lg">
                Sixteen hours before arriving in Singapore—the last stop before Manila—Rizal was once again placed behind bars, as Spanish authorities prepared for his return to the Philippines. Rizal's friends in Europe tried to save him by seeking legal action in Singapore, but their efforts failed due to legal technicalities.
              </p>
              <p className="text-lg">
                Even an Englishwoman sought help from Spain's Queen Regent, but Rizal remained unaware of these attempts. In the end, he was sent back to Manila to face trial, which historian Ambeth Ocampo described as a "kangaroo court that sentenced him to death."
              </p>
            </div>
          </div>

          <div className="mt-8 historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <AspectRatio ratio={3/4} className="rounded-lg overflow-hidden border-4 border-amber-700">
                  <img
                    src="https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Historic Prison Building"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-sm text-center mt-2 text-gray-600 italic">Prison cell similar to where Rizal was held</p>
              </div>
              <div className="col-span-1 md:col-span-2">
                <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Thrilla in Manila</h3>
                <p className="mb-4 text-lg">
                  When Rizal arrived in Manila on November 3, 1896, the Spanish authorities celebrated his capture, seeing it as a victory. Meanwhile, Manila was in chaos due to the ongoing revolution, and the new Governor-General, Camilo de Polavieja, took a harsher approach by ordering public executions to spread fear.
                </p>
                <p className="text-lg">
                  Filipinos linked to Rizal were arrested and tortured, including his brother Paciano, but they remained resilient despite the brutal treatment. The preliminary investigation on Rizal began on November 20, 1896, lasting five days. Rizal was accused before Judge Advocate Colonel Francisco Olive. He was interrogated without knowing who testified against him, and two types of evidence were presented: documentary and testimonial.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Trial */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Gavel className="h-6 w-6 text-amber-800" />
            <h2 className="text-3xl font-bold font-serif text-amber-900">The Trial</h2>
            <Separator className="flex-1 bg-amber-800" />
          </div>

          <div className="historical-card p-8 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-lg border border-amber-700 mb-8">
            <h3 className="font-serif text-2xl font-bold mb-6 text-center text-amber-900">The Prosecution's Case</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-xl font-bold mb-4 text-amber-900">Key Evidence Against Rizal</h4>
                <ul className="list-disc pl-6 space-y-3 text-lg">
                  <li>Letter from Antonio Luna to Mariano Ponce proving Rizal helped organize La Solidaridad.</li>
                  <li>Letter from Rizal to his sister (1890) mentioning the Illustrados' exile and its impact.</li>
                  <li>A poem, "Kundiman," calling for liberty, falsely attributed to Rizal.</li>
                  <li>A Masonic document supporting revolutionary ideals.</li>
                  <li>Letter from Rizal (1892) about preparing a safe refuge in Borneo.</li>
                  <li>Speech by Emilio Jacinto mentioning Rizal in a revolutionary context.</li>
                  <li>Poem "Hymn to Talisay" written by Rizal for his students, seen as inspiring rebellion.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold mb-4 text-amber-900">Weak Testimonies Against Rizal</h4>
                <p className="mb-4 text-lg">
                  Some documents and testimonies were weak or unreliable. Pio Valenzuela stated that Rizal was against the revolution. Other witnesses falsely claimed Rizal was angry about the revolution or planned an escape.
                </p>
                <h4 className="font-serif text-xl font-bold mb-4 mt-6 text-amber-900">Formal Charges Against Rizal</h4>
                <p className="mb-4 text-lg">
                  On December 11, 1896, Rizal was formally charged. He was accused of being the leader of the Philippine Revolution. Authorities claimed he founded secret societies and spread revolutionary propaganda.
                </p>
                <h4 className="font-serif text-xl font-bold mb-4 mt-6 text-amber-900">Rizal's Defense</h4>
                <p className="text-lg">
                  On December 15, 1896, Rizal wrote a manifesto. He denied involvement in the revolution. He encouraged Filipinos to focus on education, industry, and peaceful reforms instead of armed rebellion.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
              <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">The "Kangaroo Trial"</h3>
              <p className="mb-4 text-lg">
                On December 26, 1896, José Rizal was taken under heavy guard to Cuartel de España, where he faced a military trial. The trial was led by Lt. Col. José Togores Arjona, and several Spanish military officers were present, including Captains Ricardo Muñoz Arias, Manuel Reguera, Santiago Izquierdo Osorio, and Manuel Díaz Becerra.
              </p>
              <p className="mb-4 text-lg">
                The courtroom was filled with Spanish officials and spectators, including the prosecuting attorney, Capt. Rafael Domínguez, and Judge Advocate Colonel Francisco Olive, who had previously handled Rizal's preliminary investigation.
              </p>
              <p className="text-lg">
                Rizal was not given the right to choose his own lawyer and was instead assigned a Spanish military officer, Lt. Luis Taviel de Andrade, as his defense attorney. This was a bitter irony, as Taviel de Andrade was the brother of Rizal's former bodyguard during his peaceful exile in Dapitan. The defense attorney reviewed the charges and recognized that Rizal was already being treated as guilty before the trial even began.
              </p>
            </div>

            <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
              <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Rizal's Defense - The 12 Points of Innocence</h3>
              <p className="mb-4 text-lg">
                Despite the unfair circumstances, Rizal courageously defended himself with 12 key arguments proving his innocence:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-lg">
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

          <div className="mt-8 historical-card p-8 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-lg border border-amber-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="col-span-1">
                <AspectRatio ratio={1} className="rounded-lg overflow-hidden border-4 border-amber-700">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Trial documentation"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-sm text-center mt-2 text-gray-600 italic">Records similar to those used in Rizal's trial</p>
              </div>
              <div className="col-span-1 md:col-span-2">
                <h3 className="font-serif text-3xl font-bold mb-4 text-center text-amber-900">Biased Verdict & Death Sentence</h3>
                <p className="mb-6 text-xl">
                  Despite Rizal's well-argued defense, the Spanish military court ignored all evidence of his innocence. The judges, who were biased against him from the start, found him guilty of rebellion and sedition. The verdict was quickly sent to Governor-General Camilo de Polavieja, who was determined to make an example of Rizal. Without hesitation, he confirmed the death sentence and scheduled the execution.
                </p>
                <p className="mb-4 text-lg">
                  On December 28, 1896, Governor-General Polavieja officially signed the order for Rizal's execution by firing squad. The execution was set for the morning of December 30, 1896, at Bagumbayan (now known as Luneta Park in Manila). Despite public outcry and last-minute appeals for clemency, Rizal's fate was sealed. His trial, widely considered unjust and politically motivated, became one of the most infamous moments in Philippine history.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Final Hours */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <UserX className="h-6 w-6 text-amber-800" />
            <h2 className="text-3xl font-bold font-serif text-amber-900">Rizal's Last Hours</h2>
            <Separator className="flex-1 bg-amber-800" />
          </div>

          <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700 mb-8">
            <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Alone in the Cell</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4 text-lg">
                  After being sentenced to death on December 30, 1896, Rizal calmly accepted his fate. On the morning of December 29, he received official notice of his execution. He was then moved to the prison chapel, where he spent his final hours.
                </p>
                <p className="text-lg">
                  Rizal wrote farewell letters to his loved ones, conversed with his closest friends, and received many visitors. Between noon and 3:00 PM, he was left alone in his cell. He ate his last meal and wrote his final letter to his best friend, Ferdinand Blumentritt, expressing his peaceful acceptance of his fate.
                </p>
              </div>
              <div>
                <p className="mb-4 text-lg">
                  Before being sentenced to death, Rizal spent his final days preparing himself for the inevitable. Family and friends visited him, but it was in solitude that Rizal wrote his final masterpiece, Mi Ultimo Adios (My Last Farewell).
                </p>
                <p className="text-lg">
                  Rizal's family defied orders and visited him before his execution. His sisters refused to let the Spaniards take his body and fought for his dignity. Rizal distributed personal belongings to each family member, giving keepsakes like a watch, handkerchief, and a lamp containing his hidden last poem. After his death, his sisters retrieved the lamp and discovered the poem Mi Último Adiós inside. The poem, which was secretly written during his imprisonment, became a powerful symbol of patriotism and sacrifice.
                </p>
              </div>
            </div>
          </div>

          <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700 mb-8">
            <h3 className="font-serif text-2xl font-bold mb-6 text-center text-amber-900">Rizal's Last Day</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">Morning</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold">6:00 A.M.</span> - Rizal was read with his death sentence and prepared for his final moments.</li>
                    <li><span className="font-semibold">7:00 A.M.</span> - He was moved to the prison chapel and visited by Jesuit priests and teachers from Ateneo.</li>
                    <li><span className="font-semibold">8:00 A.M.</span> - Rizal had his last breakfast with Fr. Antonio Rosell, after which his defense lawyer, Lt. Taviel de Andrade, visited him.</li>
                    <li><span className="font-semibold">9:00 A.M.</span> - Fr. Frederico Faura arrived, reminding Rizal of his prophecy that he would lose his head for writing Noli Me Tangere.</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-700">
                  <h4 className="font-serif text-xl font-bold mb-2 text-amber-900">Afternoon and Evening</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold">12:00 P.M. - 3:30 P.M.</span> - Rizal was left alone in his cell, where he continued writing his farewell poem, which he secretly hid in an alcohol cooking stove.</li>
                    <li><span className="font-semibold">4:00 P.M.</span> - Rizal's mother, Doña Teodora Alonzo, visited him for an emotional farewell. She was given Rizal's final gift - a religious book, Imitation of Christ.</li>
                    <li><span className="font-semibold">6:00 P.M.</span> - Rizal had his last supper, where he forgave his enemies, including the military judges.</li>
                    <li><span className="font-semibold">9:30 P.M.</span> - Rizal was visited by Don Gaspar Cestaño, fiscal of the Royal Audience of Manila.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
              <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Of Letters and Tears</h3>
              <p className="mb-4 text-lg">
                On the evening of December 29, 1896, Rizal had his last meal and informed Captain Dominguez that he forgave those who had condemned him to death. That same night, he signed a controversial retraction letter, renouncing the Philippine revolution and his association with the independence movement. Some historians argue that the letter was forged, while others believe it was genuine.
              </p>
              <p className="mb-4 text-lg">
                At 3:00 a.m. on December 30, Rizal prayed and confessed his sins in the chapel. He read Imitation of Christ by Thomas à Kempis, a book he held dear. At 5:30 a.m., he had his final breakfast of boiled eggs and sealed a small note inside an oil lamp, which contained Mi Último Adiós. This was his last literary masterpiece—a final message of love, sacrifice, and hope for his beloved country.
              </p>
              <p className="text-lg">
                At 6:00 a.m., he wrote his last letters to his family before marching to Bagumbayan, where he would face his execution with unwavering courage.
              </p>
            </div>

            <div className="historical-card p-6 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-md border border-amber-700">
              <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Final Farewells</h3>
              <p className="mb-4 text-lg">
                In his final letters, Rizal expressed deep sorrow for the pain he had caused his family. In a note to his father, he apologized for the suffering brought by his imprisonment and execution. To his mother, Teodora Alonso, he wrote a simple but heartbreaking farewell.
              </p>
              <p className="mb-4 text-lg">
                His letter to his brother reflected his sadness over leaving him alone to care for their family. He reassured his brother that he was innocent of the crime of rebellion and had already accepted his fate. Despite the injustice he faced, Rizal forgave those responsible for his death.
              </p>
              <p className="mb-4 text-lg">
                In a letter to his family, he urged them to forgive each other and live in harmony. He reminded them to love and respect their parents as he had always done. His final request was simple: he wished to be buried with a cross and a stone, without grand ceremonies or anniversaries. His last words showed his enduring love for his country and his fiancée, Josephine Bracken.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: Execution and Legacy */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Flag className="h-6 w-6 text-amber-800" />
            <h2 className="text-3xl font-bold font-serif text-amber-900">To Die Is To Rest</h2>
            <Separator className="flex-1 bg-amber-800" />
          </div>

          <div className="historical-card p-8 bg-[url('/old-paper.png')] bg-repeat rounded-lg shadow-lg border border-amber-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">The Execution</h3>
                <p className="mb-4 text-lg">
                  As the execution took place, the Spanish soldiers shouted, "Viva España! Muerte a los traidores!" ("Long live Spain! Death to the traitors!"), but the Filipino crowd remained silent, refusing to echo the cheers of their colonizers. The silence that followed was more powerful than any words—an unspoken protest against the injustice of Rizal's death.
                </p>
                <p className="mb-4 text-lg">
                  Rizal's final moments were not just the end of a man's life but the beginning of a revolution. His execution ignited a fire in the hearts of the Filipino people, strengthening their resolve to fight for independence. The shot that ended his life was also the shot that would shatter Spain's grip on the Philippines.
                </p>
                <p className="text-lg">
                  Though the Spanish authorities had hoped that Rizal's death would put an end to the growing resistance, it had the opposite effect. Instead of silencing the revolution, it became the catalyst that inspired Filipinos to continue the struggle for freedom. His martyrdom transformed him into a national symbol—proof that even in death, his ideals would live on.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900">Rizal's Enduring Legacy</h3>
                <p className="mb-4 text-lg">
                  In the years that followed, the Philippine Revolution gained momentum, and just two years after Rizal's execution, Spain's control over the country weakened. By 1898, Spain had lost its rule over the Philippines, proving that Rizal's sacrifice was not in vain.
                </p>
                <p className="mb-4 text-lg">
                  His death marked not just the tragic loss of a hero but also the birth of a nation that would continue to honor his legacy for generations to come. Today, Rizal is remembered as the Philippines' national hero, and his martyrdom is commemorated every December 30 as Rizal Day.
                </p>
                <p className="text-lg">
                  His works, including his novels, essays, and poems, continue to inspire Filipinos and people around the world. His life and death serve as a reminder of the power of intellect, courage, and self-sacrifice in the face of tyranny.
                </p>

                <div className="mt-8 bg-amber-100/70 p-6 rounded-lg border border-amber-800 text-center">
                  <p className="italic text-xl font-serif">
                    "The pen is mightier than the sword, but courage fuels the revolution."
                  </p>
                  <p className="mt-2 font-semibold">- Jose Rizal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter3;
