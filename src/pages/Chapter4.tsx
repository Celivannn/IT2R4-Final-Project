
import React from 'react';
import LessonContent from '@/components/LessonContent';
import Navbar from '@/components/Navbar';
import { Separator } from "@/components/ui/separator";
import { Book, Clock } from "lucide-react";
import ChapterSynopsis from '@/components/ChapterSynopsis';

const Chapter4 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-1 container max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Rizal's Writings: Illuminating Philippine History and Society</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">Annotation of Antonio Morga's Sucesos, Noli Me Tangere, and El Filibusterismo</p>
        </div>

        <div className="mb-8">
          <div className="historical-card mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Introduction</h2>
            <Separator className="my-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="prose max-w-none">
                <p className="mb-4">This chapter explores Jose Rizal's most influential historical and literary works that awakened Filipino nationalism and exposed the injustices of Spanish colonization.</p>
                <p>We'll examine his critical annotation of Antonio de Morga's "Sucesos de las Islas Filipinas," which reclaimed Philippine pre-colonial history, and his two powerful novels, "Noli Me Tangere" and "El Filibusterismo," which vividly depicted the social cancer of colonial oppression.</p>
              </div>
              <div>
                <img 
                  src="/rizal-books.jpg" 
                  alt="Rizal's published works" 
                  className="rounded-lg shadow-md w-full h-auto historical-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/800x500/e2e8f0/64748b?text=Rizal's+Publications";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Book className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold text-gray-900">Lesson 1: Annotation of Antonio Morga's Sucesos</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="Antonio de Morga and the Sucesos de las Islas Filipinas"
            content={
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                  <img 
                    src="/morga-book.jpg" 
                    alt="Morga's Sucesos de las Islas Filipinas"
                    className="rounded-lg shadow-md w-full md:w-1/3 h-auto mb-4 md:mb-0 historical-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/400x600/e2e8f0/64748b?text=Morga's+Sucesos";
                    }}
                  />
                  <div>
                    <p className="mb-4">Dr. Antonio de Morga was a Spanish lawyer and official who served as lieutenant governor-general of the Philippines and judge of the Royal Audiencia in Manila. His book, Sucesos de las Islas Filipinas, was first published in Mexico in 1609. It chronicled the events in the Philippine Islands from their discovery by Ferdinand Magellan in 1521 until the early 17th century.</p>
                    <p className="mb-4">What distinguished Morga's work from other Spanish accounts was his relatively objective and fair portrayal of the Filipino people, describing their customs, traditions, governance, and way of life before and during the early years of Spanish rule.</p>
                  </div>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Rizal's Motivation</h3>
                  <p className="mb-4">Rizal annotated Morga's work for several reasons:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">To Correct Historical Injustices</h4>
                      <p>Rizal believed that Spanish historians and friars deliberately distorted the history of the Philippines to justify Spain's colonization. By annotating Morga's book, Rizal aimed to expose these distortions and reveal the truth about the Filipinos' past.</p>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">To Awaken National Consciousness</h4>
                      <p>Rizal believed that Filipinos should be proud of their history. By highlighting their cultural and historical achievements before Spanish colonization, Rizal wanted to instill a sense of pride and inspire them to fight for their rights and freedom.</p>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <h4 className="font-semibold mb-2">To Provide an Accurate Historical Record</h4>
                      <p>Rizal's annotations sought to provide a factual and balanced account of Philippine history that future generations could rely upon.</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700 my-4">
                    "They become ashamed of what was their own; they began to admire and praise whatever was foreign and incomprehensible; their spirit damaged and it surrendered."
                  </blockquote>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="historical-card">
                    <h3 className="text-xl font-semibold mb-4">Rizal's Discovery and Works of Morga</h3>
                    <p className="mb-4">Rizal found a rare copy of Morga's Sucesos de las Islas Filipinas in the British Museum in London during his stay in 1888. He was struck by the fact that Morga, unlike other Spanish chroniclers, did not depict Filipinos as uncivilized savages. Instead, Morga acknowledged the civilization and cultural achievements of the early Filipinos.</p>
                    <p>Rizal saw in Morga's work a powerful tool to refute the lies spread by Spanish friars and historians, who justified colonization by depicting the natives as inferior and barbaric. Rizal devoted time to annotating Morga's book to provide additional information, corrections, and commentary. He compared Morga's accounts with other historical sources and his own knowledge. His annotations highlighted the rich heritage of pre-colonial Filipinos and corrected the misconceptions perpetuated by colonial narratives.</p>
                  </div>
                  
                  <div className="historical-card">
                    <h3 className="text-xl font-semibold mb-4">Publication of Rizal's Annotated Edition</h3>
                    <p className="mb-4">Rizal's annotated edition of Sucesos de las Islas Filipinas was published in 1890 in Paris, with the financial assistance of his friends in the Propaganda Movement, including Dr. Ferdinand Blumentritt, who wrote the prologue to the book.</p>
                    <p>The complete title of the annotated edition is Sucesos de las Islas Filipinas por el Doctor Antonio de Morga, Obra Publicada en Mexico en el Año de 1609, Nuevamente Sacada a Luz y Anotada por Jose Rizal.</p>
                    <img 
                      src="/rizal-annotation.jpg" 
                      alt="Rizal's annotated Morga"
                      className="rounded-lg w-full h-auto mt-4 historical-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Rizal's+Annotations";
                      }}
                    />
                  </div>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Morga's Annotations</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Morga's account tended to downplay native literacy by portraying early Filipinos as lacking formal education and written language, implying they were primitive.</li>
                    <li>Morga depicted the Filipino political organization as loosely structured, suggesting that native communities were disorganized and in dire need of the Spanish "civilizing" influence.</li>
                    <li>Morga often depicted the Philippines as having limited external interactions, suggesting that trade was sporadic and largely dependent on Chinese influence.</li>
                    <li>In Morga's narrative, Filipino skills in various crafts and industries were either understated or seen as rudimentary, implying a reliance on external expertise for technological progress.</li>
                    <li>Morga's portrayal often painted pre-colonial society as chaotic or backward, suggesting that disorder prevailed until Spanish intervention.</li>
                    <li>Morga often justified Spanish intervention by suggesting that the Filipinos needed to be "civilized" and improved through European methods, thus implying that Spanish rule was a beneficial transformation.</li>
                    <li>Morga's account perpetuated the idea that Spaniards introduced civilization, progress, and modernity to a supposedly undeveloped society.</li>
                  </ul>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Highlights of Rizal's Annotations</h3>
                  <p className="mb-4">Rizal emphasized the advanced culture of the pre-colonial Filipinos, including:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Their literacy and use of their own writing system (Baybayin).</li>
                        <li>Their sophisticated political structures and barangay system of governance.</li>
                        <li>Their extensive trade relations with China, Japan, Siam (Thailand), and Borneo.</li>
                        <li>Their skills in shipbuilding, mining, metallurgy, and agriculture.</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-amber-700/10">
                      <ul className="list-disc pl-6 space-y-1">
                        <li>He highlighted how Filipino society was peaceful and prosperous before Spanish conquest.</li>
                        <li>Rizal criticized the Spaniards for their exploitation, forced labor, abuses, and destruction of native culture.</li>
                        <li>He refuted the claim that Spaniards brought civilization to the Philippines, showing that Filipinos had a thriving civilization before colonization.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Rizal's arguments on Morga's Sucesos</h3>
                  <p className="mb-4">In Dr. Jose Rizal's New Edition of Morga's Sucesos, three main ideas were highlighted:</p>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                    <p className="mb-2">1. He emphasized that the people of the Philippines had their own distinct culture even before the arrival of the Spaniards.</p>
                    <p className="mb-2">2. Rizal argued that the Spanish colonization caused significant harm to the Filipinos, leading to their decimation, demoralization, exploitation, and ruin.</p>
                    <p>3. He pointed out that the current state of the Philippines was not necessarily superior to its past.</p>
                  </div>
                  
                  <p>Rizal accurately observed in his historical essay that the Philippines, as a Spanish colony, suffered depopulation, poverty, and stagnation. The people lost their old traditions, including their written works, songs, poems, and laws, as they adopted foreign doctrines that were unfamiliar to them. They gradually degraded themselves, ashamed of their culture and admiring what was foreign and incomprehensible. Rizal believed the Spanish conquest played a role in declining the Philippines' once-rich tradition and culture.</p>
                </div>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: Annotation of Morga</h3>
                <ul className="space-y-3">
                  <li>Antonio de Morga's "Sucesos de las Islas Filipinas" (1609) was one of the few Spanish accounts that portrayed pre-colonial Filipino society with relative objectivity.</li>
                  <li>Rizal discovered the book at the British Museum in 1888 and saw it as a tool to correct historical distortions about Philippine history.</li>
                  <li>Rizal's annotated version, published in 1890, enhanced Morga's text with insights that demonstrated the advanced civilization of pre-colonial Filipinos.</li>
                  <li>Through his annotations, Rizal refuted the Spanish colonial narrative that Filipinos were primitive savages who needed Spanish "civilization".</li>
                  <li>Rizal's work not only corrected historical inaccuracies but sought to restore Filipino pride in their cultural heritage.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Historical Impact</h3>
                <p className="mb-4">Rizal's annotated edition of Morga's Sucesos was revolutionary in its approach to Philippine historiography. By using a Spanish historian's own work to challenge colonial narratives, Rizal created a powerful argument against Spanish propaganda. His annotations represented one of the first serious attempts by a Filipino to reclaim their own history.</p>
                <p className="mb-4">This work established Rizal not just as a novelist or political activist, but as a serious historian and scholar. His meticulous approach to research and documentation impressed even European academics, further legitimizing the Filipino cause on the world stage.</p>
                <p>The impact of Rizal's annotations extends to modern times, serving as a foundation for post-colonial studies and Filipino historical scholarship. His work pioneered the critical examination of historical texts that continues to shape how modern historians approach colonial-era documents.</p>
              </div>
            }
          />
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Book className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold text-gray-900">Lesson 2: The Noli Me Tangere</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="Noli Me Tangere"
            content={
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                  <img 
                    src="/noli-cover.jpg" 
                    alt="Cover of Noli Me Tangere"
                    className="rounded-lg shadow-md w-full md:w-1/3 h-auto mb-4 md:mb-0 historical-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/300x450/e2e8f0/64748b?text=Noli+Me+Tangere";
                    }}
                  />
                  <div>
                    <p className="mb-4">In late 1884, Dr. Jose Rizal began writing a novel in Madrid and completed about half of it. He continued writing in Paris after finishing his studies and completed half of the second half. The remaining portion was written in Germany.</p>
                    <p className="mb-4">During a difficult time in December 1886, penniless and hopeless, Rizal almost burned the manuscript. Fortunately, a telegram from his friend Dr. Maximo Viola, announcing a visit to Berlin, renewed Rizal's hope. Eventually, Viola, who came from a wealthy family helped with the funds needed to publish the Noli Me Tangere.</p>
                  </div>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Symbolisms in the Noli's Cover</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    <div>
                      <p className="mb-4">The cover of Noli Me Tangere has several symbolisms that represent the novel's themes and messages. Here are some of the symbolisms found in the book cover design:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-semibold">Cross:</span> sufferings</li>
                        <li><span className="font-semibold">Pomelo blossoms and laurel leaves:</span> represent faith, honor, and fidelity</li>
                        <li><span className="font-semibold">Burning torch:</span> the awakening of Filipinos to fight for their rights</li>
                        <li><span className="font-semibold">Silhouette of a Filipina:</span> believed to be Maria Clara, Crisostomo Ibarra's lover, and symbolizes the plight of Filipino women during the Spanish colonial period</li>
                        <li><span className="font-semibold">Tombstone:</span> religious faith</li>
                        <li><span className="font-semibold">Chimera:</span> a fantastic creature with the head of a Spanish-India mestiza and the legs of a Spanish friar, which represents the grotesque portrait of Rizal's patria adorada and evokes Philippine colonial society in general</li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src="/noli-symbolism.jpg" 
                        alt="Symbolism in Noli Me Tangere"
                        className="rounded-lg w-full h-auto historical-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Noli+Symbolism";
                        }}
                      />
                      <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><span className="font-semibold">Feminine figure:</span> represents all that is best in Philippine life, symbolizing constancy, courage, and religious faith</li>
                        <li><span className="font-semibold">Elevated and shadowed feminine figure:</span> represents the feminine figure being placed in shadow despite being elevated, which symbolizes the oppression of women during the Spanish colonial period</li>
                        <li><span className="font-semibold">Religious orders:</span> symbolize the religious orders running everything behind the scenes</li>
                        <li><span className="font-semibold">Death, cruelty, and bondage amid lush vegetation:</span> symbolize the suffering and oppression of the Filipinos during the Spanish colonial period</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: Noli Me Tangere</h3>
                <ul className="space-y-3">
                  <li>Written between 1884-1887 while Rizal was studying in Europe.</li>
                  <li>Published in Berlin in 1887 with financial help from Rizal's friend Dr. Maximo Viola.</li>
                  <li>Title means "Touch Me Not" in Latin, referring to Jesus's words to Mary Magdalene after resurrection.</li>
                  <li>The novel exposed the abuses of Spanish colonial rule, particularly those committed by friars.</li>
                  <li>Became a catalyst for Philippine nationalism and contributed to the eventual revolution against Spain.</li>
                  <li>Was banned in the Philippines but copies were smuggled in and read secretly by Filipinos.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Impact on Philippine Society</h3>
                <p className="mb-4">The publication of Noli Me Tangere had immediate and far-reaching consequences. The Spanish authorities banned the book for its "heretical" and "anti-Catholic" content. Copies were confiscated and destroyed, and possession of the novel was considered a crime.</p>
                <p className="mb-4">Despite the ban, copies were smuggled into the Philippines and passed from hand to hand. Filipinos who read the novel found their experiences validated and their grievances articulated. The novel awakened national consciousness and inspired many to join the reform movement and later, the revolution.</p>
                <p>The Spanish authorities' reaction to the novel inadvertently confirmed its truth. Their harsh response, including increased surveillance of Rizal and his family, demonstrated that the colonial government recognized the power of his words to threaten their rule.</p>
              </div>
            }
          />
        </div>
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Synopsis of Noli Me Tangere</h2>
          
          <ChapterSynopsis
            number="Introduction"
            content={
              <p>The novel had 63 chapters and an epilogue. It started with a reception hosted by Capitan Tiago (Santiago de los Santos) at his house on Calle Anilao on the last day of October. The reception was held to honor Crisostomo Ibarra, a young and wealthy Filipino who had recently returned after studying in Europe for seven years. Ibarra, the only son of Don Rafael Ibarra and a friend of Capitan Tiago was engaged to the beautiful Maria Clara, who was believed to be Capitan Tiago's daughter.</p>
            }
          />
          
          <ChapterSynopsis
            number="The Reception"
            content={
              <div>
                <p className="mb-4">The notable guests during the reception were:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Padre Damaso, a Franciscan friar who had served as the parish priest for two decades of San Diego, Ibarra's hometown.</li>
                  <li>Padre Sibyla, a young Dominican parish priest from Binondo</li>
                  <li>Senor Guevara, a kind and elderly lieutenant of the Guardia Civil</li>
                  <li>Don Tiburcio de Espanada, a deceitful Spanish physician and controlled by his wife</li>
                  <li>Dona Victorina, the domineering wife of Don Tiburcio</li>
                </ul>
                <p>Crisostomo Ibarra arrived and impressed the guests, except for Padre Damaso. He introduced himself to the ladies and discussed his studies and travels during dinner. Padre Damaso, unhappy with his meal, tried to discredit Ibarra. After dinner, Ibarra left for his hotel but was told by Lieutenant Guevara about his father's tragic death. Don Rafael defended a boy and accidentally caused his own demise. He was imprisoned, died unhappily, and was buried in an accused-of-heresy incident. Ibarra, grateful to Lieutenant Guevara, vowed to uncover the truth about his father's death.</p>
              </div>
            }
          />
          
          <ChapterSynopsis
            number="Ibarra Returns to San Diego"
            content={
              <div>
                <p className="mb-4">The next day, Ibarra met Maria Clara and assured her that he hadn't forgotten her. After their reunion, he visited his father's grave in San Diego. The grave-digger revealed that the previous parish priest ordered Don Rafael's corpse to be thrown into the lake due to bad weather. Angry, Ibarra left the cemetery and encountered Padre Salvi, who claimed innocence since he wasn't the parish priest during the incident. It was Padre Damaso, his predecessor, who was responsible. Convinced of Padre Salvi's innocence, Ibarra left.</p>
                <p>Around town, Ibarra also encountered various interesting individuals:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Tasio the Sage was an old and wise man with progressive ideas, but people called him "Tasio the Lunatic" simply because they are unable to grasp his ideas</li>
                  <li>A progressive school teacher who expressed concerns about the lack of a proper school building and the discouraging attitude of the parish priest towards modern teaching methods</li>
                  <li>The gobernadorcillo who was spineless and catered to the Spanish parish priest's wishes</li>
                  <li>Don Felipe Lino who led the liberal faction and held the position of teniente mayor</li>
                  <li>Don Melchor served as the captain of the town police</li>
                  <li>Don Basilio and Don Valentin, the respected former gobernadorcillos</li>
                </ul>
              </div>
            }
          />
          
          <ChapterSynopsis
            number="Sisa's Tragedy"
            content={
              <p>One tragic tale in the novel involves Sisa. The novel portrays her descent from wealth to poverty after marrying a gambler. Her life turned miserable when she lost her only joys, her two sons. Basilio and Crispin worked as sacristans in San Diego church to support their mother. Sadly, Crispin was falsely accused of theft by the cruel sacristan mayor. He was then tortured to death. Basilio managed to escape but was deeply affected by his brother's cries. Overwhelmed by the loss of her sons, Sisa desperately searched for them everywhere. Ultimately, Sisa succumbed to madness due to her immense sorrow.</p>
            }
          />
          
          <ChapterSynopsis
            number="The Picnic"
            content={
              <div>
                <p className="mb-4">Meanwhile, Capitan Tiago, Maria Clara, and Aunt Isabel, who cared for Maria Clara after her mother's passing, arrived in San Diego. Ibarra organized a picnic by the lake, attended by Maria Clara and her friends Sinang, Victoria, Iday, and Neneng. Aunt Isabel, Capitana Tika (Sinang's mother), Andeng (Maria Clara's foster sister), Albino (who loved Sinang), Ibarra, and his friends also joined. A notable boatman named Elias, a strong and quiet peasant youth was present.</p>
                <p className="mb-4">At the request of her friends, Maria Clara played the harp and sang "The Song of Maria Clara" is a poem rendered as a song that celebrates the beauty of one's homeland. It emphasized family love and belonging. The music also touches on the mixed emotions of death in one's native land, where the absence of loved ones is keenly felt.</p>
                <p>While having a pleasant picnic time, an incident occurred. A crocodile happened on the group's picnic area. Elias trapped and fought the crocodile bravely, but he was unable to overpower it. Ibarra jumped in, killed the crocodile, and rescued Elias.</p>
              </div>
            }
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ChapterSynopsis
              number="Town Events"
              content={
                <p>After the incident, the group joined Padre Salvi, Capitan Basilio (former gobernadorcillo and Sinang's father), the alferez (lieutenant of the Guardia Civil), and the town officials for lunch. During the meal, Maria Clara and her friends played the "Wheel of Chance." However, Padre Salvi destroyed the fortune-telling book, saying it was sinful. Later, soldiers from the Guardia Civil arrived looking for Elias. He was accused of assaulting Padre Damaso and the alferez. Fortunately, Elias had already left.</p>
              }
            />
            
            <ChapterSynopsis
              number="The Schoolhouse Project"
              content={
                <p>Meanwhile, Ibarra received a telegram approving his donation of a schoolhouse for the children of San Diego. The next day, Ibarra consulted Tasio about the schoolhouse project. Tasio's writings were in hieroglyphics, which he explained were meant for future generations to recognize that not everyone ignored history. Tasio was pessimistic about the schoolhouse project. He insisted that Ibarra's plans to build a school would only be scorned unless he gained the church's and influential leaders' approval. Nevertheless, Ibarra went on with the project.</p>
              }
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ChapterSynopsis
              number="The Town Fiesta"
              content={
                <div>
                  <p className="mb-4">On the other hand, San Diego was busy preparing for its annual fiesta honoring San Diego de Alcala. Visitors brought music, fireworks, feasting, and traditional dances. Five brass bands, including the famous Pagsanjan Band, owned by Miguel Guevara, and three orchestras provided lively tunes for the festivities.</p>
                  <p>During the fiesta morning, a high Mass was held in the church, led by Padre Salvi. However, it was Padre Damaso who delivered a sermon. He lengthily lectured on the supposed negative influence of educated individuals who, in his view, spread harmful ideas among the people. As Padre Salvi continued the mass, Elias discreetly approached Ibarra, who was praying beside Maria Clara. He cautioned Ibarra to be careful during the upcoming ceremony to lay the schoolhouse's cornerstone. Elias revealed that there was a plot to assassinate Ibarra.</p>
                </div>
              }
            />
            
            <ChapterSynopsis
              number="Plot Against Ibarra"
              content={
                <p>Elias suspected a man described as 'yellowish' working for Ibarra's enemies. During the cornerstone ceremony, the derrick collapsed, but Elias saved Ibarra's life by pushing him aside. It was the yellowish man who died in the accident. During dinner, another incident occurred. Padre Damaso insulted Ibarra's father, leading to a heated confrontation. Ibarra reacted by punching Padre Damaso and grabbing a knife. Fortunately, Maria Clara intervened, preventing further harm. Ibarra's attack on Padre Damaso led to two outcomes: His engagement to Maria Clara was canceled, and he was excommunicated. Luckily, the governor-general, who was tolerant, visited the town and befriended Ibarra. He reassured him, convinced Capitan Tiago to accept Ibarra, and vowed to help lift the ex-communication with the Archbishop of Manila.</p>
              }
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ChapterSynopsis
              number="Maria Clara's Illness"
              content={
                <p>After the fiesta, Maria Clara fell ill and received treatment from the unqualified Spanish physician Tiburcio de Espanada. Tiburcio's wife, Victorina, a vain and frustrated native woman, often visited Capitan Tiago's house. Despite being of native descent, Victorina considered her people inferior and desired to be more Spanish, adopting the name "Doctora Dona Victorina de los Reyes de Espanada." She introduced a young Spaniard named Don Alfonso Linares de Espanada, who was jobless and seeking a wealthy Filipino bride. Both Victorina and Padre Damaso supported his pursuit of Maria Clara, but she remained unresponsive due to her love for Ibarra.</p>
              }
            />
            
            <ChapterSynopsis
              number="Comic Relief"
              content={
                <p>The novel also had a touch of comedy. The humor was about a fight between two ridiculous women: Dona Consolacion, the crude mistress of the Spanish alferez, and Dona Victorina, a native woman who wanted to be more Spanish and the wife of the submissive Spanish quack doctor. The two women exchanged insults using vulgar language and even attempted to fight each other physically. However, their brawl was interrupted by the timely arrival of Padre Salvi, disappointing the curious spectators.</p>
              }
            />
          </div>
          
          <ChapterSynopsis
            number="Elias's Tragic Story"
            content={
              <div>
                <p className="mb-4">Elias shared a tragic story with Ibarra, paralleling Sisa's tale. His grandfather, a young bookkeeper, was falsely accused of arson and suffered public flogging, leaving him crippled. To support her sick husband and son, his pregnant wife turned to begging and eventually became a prostitute. After the death of her husband and the birth of their second child, she fled to the mountains with her two sons.</p>
                <p className="mb-4">Years later, Elias' grandmother's first son, Balat, became a notorious criminal who caused fear in the provinces. After being captured by the authorities, his severed head was hung on a tree branch in the forest. Tragically witnessing this horrific scene led to Elias' grandmother's death.</p>
                <p>Balat's kind-hearted younger brother ran away and became a trusted laborer for a wealthy man in Tayabas. He fell in love with the man's daughter, but her father discovered the truth and sent him to jail. The girl gave birth to twins, Elias, and a girl, raised as rich children by their grandfather. Elias attended a Jesuit College while his sister studied at La Concordia College. However, a distant relative exposed their scandalous birth during a money dispute, causing them to be disgraced. An old male servant, who they had mistreated, was forced to testify in court and revealed he was their real father.</p>
              </div>
            }
          />
          
          <ChapterSynopsis
            number="Final Chapters"
            content={
              <div>
                <p className="mb-4">Elias and his sister left Tayabas to escape their shameful past. Unfortunately, one day the sister vanished, leaving Elias distraught. He searched relentlessly but eventually heard that a girl resembling his sister had been found dead on San Diego Beach. From that point on, Elias lived as a wanderer, moving from one province to another, until he crossed paths with Ibarra.</p>
                <p className="mb-4">On the other hand, Ibarra's enemies plotted to ruin him. They staged an attack on the Guardia Civil barracks. Ibarra was falsely blamed as the mastermind. When the attack failed and the attackers were caught, Ibarra was held accountable for the incident.</p>
                <p className="mb-4">Elias protected Ibarra by destroying incriminating papers and setting his house on fire. He joined Ibarra in prison and helped him escape. They escaped on a boat loaded with grass. Ibarra visited Capitan Tiago's house to say goodbye to Maria Clara. In their emotional meeting, Ibarra forgave Maria Clara for giving his letters to the authorities. Maria Clara revealed that the letters were switched with one from her late mother, Pia Alba, given by Padre Salvi. This letter exposed Padre Damaso as her real father.</p>
                <p>Ibarra and Elias paddled up the river after saying goodbye to Maria Clara. The Guardia Civil pursued them on a police boat as they reached the lake. Elias told Ibarra to hide while he distracted the soldiers by swimming to the shore. The police fired at Elias. He was hit, and there was a pool of red in the water, but the authorities did not find the body. They assumed it was Ibarra who died. This diversion helped Ibarra escape and fled to Manila.</p>
              </div>
            }
          />
          
          <ChapterSynopsis
            number="Epilogue"
            content={
              <div>
                <p className="mb-4">Critically wounded, Elias reached the shore and encountered Basilio, a young boy grieving over his mother Sisa's body. Elias instructed Basilio to build a funeral pyre to cremate their bodies. It was Christmas Eve, with the moon shining gently in the sky. Basilio prepared the pyre. While Elias felt his life slipping away, he faced east, whispering his final words. He expressed regret for not witnessing the dawn brighten over his homeland. He urged those who would see it to welcome the dawn and remember those who had fallen during the night.</p>
                <p className="mb-4">In the novel's epilogue, the fates of the remaining characters are revealed:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Maria Clara, remaining loyal to the memory of Ibarra, the man she truly loved, entered the Santa Clara nunnery.</li>
                  <li>Padre Salvi left his position in the San Diego parish and became a chaplain at the nunnery.</li>
                  <li>Padre Damaso was transferred to a distant province, but the following morning he was discovered dead in his bedroom.</li>
                  <li>Capitan Tiago, once a hospitable host and generous supporter of the church, became a ruined man addicted to opium.</li>
                  <li>Dona Victorina, continuing to dominate her husband Don Tiburcio, began wearing eyeglasses due to declining eyesight.</li>
                  <li>Linares, who failed to win Maria Clara's affection, succumbed to dysentery and was laid to rest in Paco cemetery.</li>
                  <li>The alferez, who managed to fend off the failed attack on the barracks, was promoted to the rank of major. He then left for Spain, abandoning his poor mistress, Dona Consolacion.</li>
                </ul>
                <p>The novel ends with Maria Clara residing in the Santa Clara nunnery. She was described as an unhappy nun isolated from the outside world forever.</p>
              </div>
            }
          />
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Book className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold text-gray-900">Lesson 3: The El Filibusterismo</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="The El Filibusterismo"
            content={
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                  <img 
                    src="/fili-cover.jpg" 
                    alt="Cover of El Filibusterismo"
                    className="rounded-lg shadow-md w-full md:w-1/3 h-auto mb-4 md:mb-0 historical-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/300x450/e2e8f0/64748b?text=El+Filibusterismo";
                    }}
                  />
                  <div>
                    <p className="mb-4">"El Filibusterismo," or "The Reign of Greed," is the second novel by Jose Rizal and is considered a masterpiece of Philippine literature. It was published on September 18, 1891, in Ghent, Belgium. It is a sequel to Noli Me Tangere.</p>
                    <p className="mb-4">Rizal began writing El Filibusterismo in October 1887 in Calamba, Laguna, and completed the book three years after on March 29, 1891, in Biarritz. The novel was dedicated to the three martyred priests, Mariano Gomez, Jose Burgos, and Jacinto Zamora.</p>
                    <p>The title "El Filibusterismo" has undergone multiple changes in meaning. According to Blumentritt, "filibusterismo" refers to the concept of the colony separating from the mother country, and "filibusteros" are individuals who desire to achieve this idea.</p>
                  </div>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Introduction</h3>
                  <p className="mb-4">Rizal started writing El Filibusterismo during his first homecoming against the threats and oppressions he and his family suffered because of the Noli and the so-called Calamba agrarian trouble.</p>
                  <p className="mb-4">As Rizal's usual situation abroad, having insufficient money for his needs, he ran out of funds to print the book. Another friend, Valentin Ventura, helped Rizal with the much-needed assistance to finish the book's publication.</p>
                  <p>Almost all of the first edition copies of El Filibusterismo, Ghent edition, were put in wooden boxes and sent to Hong Kong. Unfortunately, the boxes were seized, and the books were lost. As a result, the book became rare, and the few remaining Ghent copies fetched very high prices.</p>
                </div>
                
                <div className="historical-card">
                  <h3 className="text-xl font-semibold mb-4">Symbolism of the Book Cover</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                      <p className="mb-4">El Filibusterismo's cover is plain. Interestingly, its plainness is a symbol in itself. The simple cover of El Filibusterismo is significant in several ways:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>It conveys a fresh start for the Philippines and Filipinos without the trace of symbols from the events and situations in Noli Me Tangere.</li>
                        <li>It signifies the beginning of a new chapter in the country's history, free from the past and ready to move toward a brighter future.</li>
                        <li>It aims to inspire the Filipinos to fight for their freedom against the oppressive and abusive Spaniards rather than promote any symbol or ideology.</li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src="/fili-original.jpg" 
                        alt="Original El Filibusterismo cover"
                        className="rounded-lg w-full h-auto historical-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/400x600/e2e8f0/64748b?text=Original+Fili+Cover";
                        }}
                      />
                      <p className="text-sm text-center mt-2 text-gray-600 italic">Original plain cover of El Filibusterismo</p>
                    </div>
                  </div>
                </div>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: El Filibusterismo</h3>
                <ul className="space-y-3">
                  <li>Written between 1887-1891 in various European locations.</li>
                  <li>Published in Ghent, Belgium in 1891 with financial help from Valentin Ventura.</li>
                  <li>Dedicated to the three martyred priests (GomBurZa): Mariano Gomez, Jose Burgos, and Jacinto Zamora.</li>
                  <li>The novel is darker and more revolutionary in tone than Noli Me Tangere.</li>
                  <li>Set 13 years after the events of Noli Me Tangere, following the return of Crisostomo Ibarra as Simoun.</li>
                  <li>Portrays the failure of peaceful reform and hints at the necessity of revolution.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Comparing Noli and Fili</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="historical-card">
                    <h4 className="font-semibold mb-2">Noli Me Tangere</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>More hopeful and idealistic in tone</li>
                      <li>Focuses on exposing social problems</li>
                      <li>Presents Ibarra as an idealist who believes in peaceful reforms</li>
                      <li>Written during Rizal's more optimistic period</li>
                      <li>Exposes social cancer but suggests it can be cured through education and reform</li>
                    </ul>
                  </div>
                  <div className="historical-card">
                    <h4 className="font-semibold mb-2">El Filibusterismo</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Darker and more revolutionary in tone</li>
                      <li>Focuses on the consequences of ignoring social problems</li>
                      <li>Presents Simoun (Ibarra) as a revolutionary seeking vengeance</li>
                      <li>Written after Rizal witnessed continued abuses during his return to the Philippines</li>
                      <li>Suggests that peaceful reform has failed and hints at the need for revolution</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold mb-2 text-center">Rizal's Message</h4>
                  <p className="text-center">Despite the revolutionary undertones of El Filibusterismo, Rizal ultimately rejects violent revolution through the character of the dying Simoun, suggesting that education and proper preparation of the people must precede any struggle for independence.</p>
                </div>
              </div>
            }
          />
        </div>
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Synopsis of El Filibusterismo</h2>
          
          <p className="mb-6">El Filibusterismo continues the story of Noli Me Tangere, set 13 years later. Below is a chapter-by-chapter synopsis of this powerful sequel:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ChapterSynopsis
              number="1"
              title="On the Upper Deck"
              content={
                <p>The novel opens aboard the steamer Tabo traveling up the Pasig River. Among the passengers is the wealthy jeweler Simoun, a mysterious figure with blue-tinted glasses and a beard. Simoun is actually Crisostomo Ibarra in disguise, who has returned after 13 years seeking revenge against those who wronged him. Now a wealthy jeweler with influence over the Captain-General, he plans to corrupt the Spanish colonial government from within and incite a revolution.</p>
              }
            />
            
            <ChapterSynopsis
              number="2"
              title="On the Lower Deck"
              content={
                <p>This chapter introduces various Filipino characters traveling on the lower deck of the boat: Basilio (now a medical student), Isagani (a poet and law student), Padre Florentino, and others. Their conversations reveal the social and political conditions in the Philippines. We learn that Basilio was rescued by Capitan Tiago after the events of Noli Me Tangere and was sent to school. The contrast between the upper and lower decks symbolizes the class divisions in Philippine society.</p>
              }
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <ChapterSynopsis
              number="3-5"
              title="Key Early Chapters"
              content={
                <div>
                  <p className="mb-4">These chapters establish the state of Filipino society and introduce key plotlines:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Students are campaigning to establish a Spanish language academy, which represents their desire for progress through education.</li>
                    <li>Simoun is revealed to be manipulating both the Spanish authorities and Filipino revolutionaries for his own vengeful purposes.</li>
                    <li>We meet Juli, Basilio's girlfriend, who is struggling due to her family's misfortunes caused by the corrupt friar-controlled legal system.</li>
                  </ul>
                </div>
              }
            />
            
            <ChapterSynopsis
              number="6-10"
              title="Middle Chapters"
              content={
                <div>
                  <p className="mb-4">The plot develops further in these chapters:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The students' petition for a Spanish academy is rejected by the authorities after the friars oppose it.</li>
                    <li>Simoun continues his manipulation, encouraging the authorities to become more oppressive to incite revolution.</li>
                    <li>Cabesang Tales, Juli's father, becomes a bandit after losing his land to the friars through unjust means.</li>
                    <li>We learn more about Maria Clara, who is suffering in the convent where she has been since the end of the first novel.</li>
                  </ul>
                </div>
              }
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <ChapterSynopsis
              number="11-20"
              title="Rising Action"
              content={
                <div>
                  <p className="mb-4">These chapters heighten the tensions:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Simoun plans a revolution and begins distributing weapons to his conspirators.</li>
                    <li>The students face increasing persecution. Basilio is arrested despite having no involvement in political activities.</li>
                    <li>Juli decides to work as a servant for a friar to secure Basilio's release, but is assaulted and commits suicide by jumping off a balcony.</li>
                    <li>Simoun learns that Maria Clara has died in the convent after years of suffering, which deepens his desire for revenge.</li>
                  </ul>
                </div>
              }
            />
            
            <ChapterSynopsis
              number="21-30"
              title="Climax and Resolution"
              content={
                <div>
                  <p className="mb-4">The novel reaches its dramatic conclusion:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Simoun plans to use a nitroglycerine lamp to kill all the Spanish authorities at a wedding reception.</li>
                    <li>Isagani, heartbroken over losing his beloved Paulita to another man, discovers the plot and throws the lamp into the river, foiling Simoun's plan.</li>
                    <li>Wounded and pursued by the authorities, Simoun seeks refuge in the house of Padre Florentino, where he reveals his true identity as Ibarra.</li>
                    <li>Before dying from poison he has taken, Simoun confesses to Padre Florentino and is absolved of his sins.</li>
                    <li>In the final scene, Padre Florentino throws Simoun's treasures into the sea, declaring that freedom cannot be won through evil means and that redemption must be earned through sacrifice and virtue.</li>
                  </ul>
                </div>
              }
            />
          </div>
          
          <div className="historical-card mt-6">
            <h3 className="text-xl font-semibold mb-4">Legacy of El Filibusterismo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="mb-4">El Filibusterismo, along with Noli Me Tangere, played a crucial role in shaping Filipino national identity and inspiring the Philippine Revolution against Spanish colonial rule. The novel's exploration of themes such as revenge, oppression, reform vs. revolution, education, and redemption continues to resonate with readers today.</p>
                <p>Despite its darker tone compared to Noli Me Tangere, the novel ultimately rejects violent revolution as a solution, with Padre Florentino's final speech suggesting that freedom can only be achieved through education, virtue, and sacrifice. This complex message reflects Rizal's own evolving views on how the Philippines might achieve independence and reform.</p>
              </div>
              <img 
                src="/ghent-edition.jpg" 
                alt="Original Ghent edition of El Filibusterismo"
                className="rounded-lg w-full h-auto historical-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Ghent+Edition";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter4;
