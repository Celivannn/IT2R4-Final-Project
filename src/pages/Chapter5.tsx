import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LessonContent from '@/components/LessonContent';
import Navbar from '@/components/Navbar';
import { Separator } from "@/components/ui/separator";
import { Book, Clock } from "lucide-react";

interface ArticleSectionProps {
  title: string;
  content: React.ReactNode;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ title, content }) => (
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    {content}
  </section>
);

interface CauseOfMiseryProps {
  title: string;
  description: string;
}

const CauseOfMisery: React.FC<CauseOfMiseryProps> = ({ title, description }) => (
  <div className="historical-card">
    <h4 className="font-semibold mb-2">{title}</h4>
    <p>{description}</p>
  </div>
);

interface RizalOptimismProps {
  title: string;
  description: string;
}

const RizalOptimism: React.FC<RizalOptimismProps> = ({ title, description }) => (
  <div className="historical-card">
    <h4 className="font-semibold mb-2">{title}</h4>
    <p>{description}</p>
  </div>
);

const Lesson1Content: React.FC = () => (
  <div className="space-y-6">
    <ArticleSection
      title="The Philippines a Century Hence"
      content={
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
          <img
            src="/la-solidaridad.jpg"
            alt="La Solidaridad Newspaper"
            className="rounded-lg shadow-md w-full md:w-1/3 h-auto mb-4 md:mb-0 historical-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=La+Solidaridad";
            }}
          />
          <div>
            <p className="mb-4">Jose Rizal's essay "Filipinas Dentro de Cien Años" predicted the future of the Philippines under continued Spanish rule. Published in La Solidaridad, it reflected on the country's rich past, its economic decline, and the suffering of Filipinos.</p>
            <p className="mb-4">Rizal warned Spain of a possible revolution, drawing parallels to the French Revolution. His goal was to awaken Filipino nationalism and urge the people to fight for their rights.</p>
          </div>
        </div>
      }
    />

    <ArticleSection
      title="Causes of Misery in The Philippines a Century Hence"
      content={
        <>
          <p className="mb-4">Rizal identified three main causes of Filipino suffering under Spanish rule:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <CauseOfMisery
              title="Destruction of native culture"
              description="Spanish colonization erased Filipino heritage, causing a loss of identity, pride, and hope for the future."
            />
            <CauseOfMisery
              title="Spain's military laws"
              description="Militarization led to depopulation, poverty, abandoned farms, and weakened family life."
            />
            <CauseOfMisery
              title="Passive submission"
              description="The friars' misuse of power and religion bred fear, silence, and submission among Filipinos."
            />
          </div>
        </>
      }
    />

    <ArticleSection
      title="Rizal's Optimism"
      content={
        <>
          <p className="mb-4">In The Philippines a Century Hence, Rizal questioned whether Spain truly had the power to stop the Philippines from progressing. Despite the oppression and decline brought by colonial rule, he remained hopeful for the country's future. He offered several reasons for this optimism:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <RizalOptimism
              title="Failed Suppression"
              description="Efforts to destroy the Filipino people through war and famine were unsuccessful. The population endured and even grew, and Spain was unwilling to sacrifice countless soldiers for total control."
            />
            <RizalOptimism
              title="Poverty as a Catalyst"
              description="Instead of weakening them, poverty pushed Filipinos to seek reform and pursue progress."
            />
            <RizalOptimism
              title="Education and Awareness"
              description="Spain's attempt to keep Filipinos ignorant failed. National consciousness grew, and intelligent Filipino leaders still emerged."
            />
          </div>

          <p className="mt-4">Rizal believed that Spain could not stop Philippine progress and that change was only possible through major reforms in its colonial policies to match the rising nationalism among Filipinos.</p>
        </>
      }
    />

    <ArticleSection
      title="Rizal's Forecast"
      content={
        <div className="historical-card">
          <p className="mb-4">In his essay, Rizal questioned whether the Philippines would remain a Spanish colony in the future. He acknowledged that Spain had maintained control for 300 years because Filipinos had been loyal, sacrificing their freedom due to the promises and friendship offered by Spain.</p>

          <p className="mb-4">Over time, however, Filipinos began to view the colonizers as exploiters rather than protectors. Rizal predicted that if this situation continued, the Filipino people would eventually rise up, leading to a revolution unless Spain reformed. He outlined two key demands from the Filipinos:</p>

          <div className="flex items-center gap-4 ml-6 mb-4">
            <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
            <p>Representation in the Spanish Cortes and the ability to address grievances.</p>
          </div>

          <div className="flex items-center gap-4 ml-6 mb-4">
            <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
            <p>The right to human rights and freedoms.</p>
          </div>

          <p>Rizal suggested that fulfilling these demands would allow the Philippines to remain a colony but with more freedom and legal protections. However, if ignored, the Filipinos would seek independence. He clarified that his hope was for greater freedom, not complete separation, and advocated for peaceful negotiations with Spain to achieve this.</p>
        </div>
      }
    />

    <ArticleSection
      title="Other Related Writings"
      content={
        <>
          <p className="mb-4">Aside from The Philippines: A Century Hence, Rizal wrote several influential works that ignited Filipino patriotism and contributed to the Philippine revolution. This chapter will focus on two key writings:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="historical-card">
              <div className="flex">
                <img
                  src="/indolence-article.jpg"
                  alt="Indolence of the Filipinos"
                  className="w-24 h-24 object-cover rounded-md mr-4 historical-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/200x200/e2e8f0/64748b?text=Indolence";
                  }}
                />
                <div>
                  <h4 className="font-semibold mb-2">Sobre La Indolencia De Los Filipinos (The Indolence of the Filipinos)</h4>
                  <p>An essay challenging the colonial stereotype of Filipino laziness.</p>
                </div>
              </div>
            </div>

            <div className="historical-card">
              <div className="flex">
                <img
                  src="/malolos-women.jpg"
                  alt="Women of Malolos"
                  className="w-24 h-24 object-cover rounded-md mr-4 historical-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/200x200/e2e8f0/64748b?text=Malolos";
                  }}
                />
                <div>
                  <h4 className="font-semibold mb-2">Letter to the Young Women of Malolos</h4>
                  <p>Advocating for women's education and their role in nation-building.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    />
  </div>
);

const IndolenceContent: React.FC = () => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
      <img
        src="/indolence-article.jpg"
        alt="Indolence of the Filipinos Article"
        className="rounded-lg shadow-md w-full md:w-1/3 h-auto mb-4 md:mb-0 historical-image"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Indolence+Article";
        }}
      />
      <div>
        <p className="mb-4">In this essay published in La Solidaridad (in five parts between July and September 1890), Jose Rizal refuted the Spanish claim that Filipinos were naturally lazy. He argued that Filipino "indolence" was a result of Spanish colonization, not an inherent trait. Rizal emphasized that Filipinos were once hardworking and industrious before colonial rule disrupted their way of life.</p>
      </div>
    </div>

    <ArticleSection
      title="Key Causes of &quot;Indolence&quot; According to Rizal"
      content={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="historical-card">
            <h4 className="font-semibold mb-2">Galleon Trade</h4>
            <p>Cut off the Philippines from trade with nearby countries, killing local businesses and industries.</p>
          </div>

          <div className="historical-card">
            <h4 className="font-semibold mb-2">Forced Labor</h4>
            <p>Filipinos were taken from their work to serve in war-related and public projects, abandoning farming and trade.</p>
          </div>

          <div className="historical-card">
            <h4 className="font-semibold mb-2">Lack of Protection</h4>
            <p>Constant threats from pirates and invaders led to destroyed communities and a nomadic lifestyle.</p>
          </div>

          <div className="historical-card">
            <h4 className="font-semibold mb-2">Poor Education System</h4>
            <p>Schools lacked practical subjects like agriculture and industry, offering only repetitive religious instruction.</p>
          </div>

          <div className="historical-card">
            <h4 className="font-semibold mb-2">Bad Example from Spaniards</h4>
            <p>Colonial officials and elites avoided manual labor and were idle, influencing the natives.</p>
          </div>

          <div className="historical-card">
            <h4 className="font-semibold mb-2">Gambling Culture</h4>
            <p>Cockfighting and betting, encouraged even by friars and officials, distracted the people from productive work.</p>
          </div>

          <div className="historical-card">
            <h4 className="font-semibold mb-2">Corrupt Religious Teachings</h4>
            <p>Friars taught that poverty led to heaven, discouraging hard work.</p>
          </div>

          <div className="historical-card">
            <h4 className="font-semibold mb-2">Heavy Taxes and Exploitation</h4>
            <p>Excessive taxation and abuses drained people's earnings, killing motivation to work.</p>
          </div>
        </div>
      }
    />
  </div>
);

const Chapter5 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex-1 container max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Rizal's Writings: Illuminating Philippines History and Society</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">Three Significant Articles</p>
        </div>

        <div className="mb-8">
          <div className="historical-card mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Introduction</h2>
            <Separator className="my-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="prose max-w-none">
                <p className="mb-4">This chapter explores three key works of Jose Rizal — The Philippines a Century Hence, The Indolence of the Filipinos, and To the Young Women of Malolos. These writings exposed the struggles of Filipinos under colonial rule and encouraged national awakening.</p>
                <p>It also examines how Rizal's ideas shaped the Filipino concepts of bayani and kabayanihan, and how he became a symbol of Philippine nationalism, inspiring the fight for freedom and dignity.</p>
              </div>
              <div>
                <AspectRatio ratio={4 / 3} className="rounded-lg overflow-hidden">
                  <img
                    src="/rizal-writing.jpg"
                    alt="José Rizal writing at his desk"
                    className="object-cover w-full h-full historical-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/800x600/e2e8f0/64748b?text=Rizal+Writing";
                    }}
                  />
                </AspectRatio>
                <p className="text-sm text-center mt-2 text-gray-600 italic">Rizal at his desk, where he wrote many influential works</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Book className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold text-gray-900">Lesson 1</h2>
            <Separator className="flex-1" />
          </div>

          <LessonContent
            title="Three Significant Articles"
            content={<Lesson1Content />}
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: The Philippines a Century Hence</h3>
                <ul className="space-y-3">
                  <li>Published in La Solidaridad between September 1889 and January 1890 in four parts.</li>
                  <li>Analyzed the past and present conditions of the Philippines and predicted its future.</li>
                  <li>Warned Spain of a possible Filipino revolution if reforms were not implemented.</li>
                  <li>Called for representation in the Spanish Cortes and human rights protections.</li>
                  <li>Emphasized that despite Spain's efforts to suppress Filipino progress, national consciousness continued to grow.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Historical Context</h3>
                <p className="mb-4">When Rizal wrote "The Philippines a Century Hence," he was living in Europe and actively involved in the Propaganda Movement. The essay was part of his efforts to expose the conditions in the Philippines to a European audience and advocate for reforms.</p>
                <div className="historical-card">
                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-accent" />
                    <p><span className="font-semibold">Historical Note:</span> Rizal's predictions proved remarkably accurate. Within a few years of the essay's publication, the Philippine Revolution erupted (1896), and Spain's colonial rule ended in 1898 following the Spanish-American War.</p>
                  </div>
                </div>
                <p className="mt-4">The essay remains relevant today as a testament to Rizal's keen political insight and his vision for a Philippines where citizens enjoy their rights and freedoms within a just society.</p>
              </div>
            }
          />
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Book className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold text-gray-900">Lesson 1 (Continued)</h2>
            <Separator className="flex-1" />
          </div>

          <LessonContent
            title="The Indolence of the Filipinos"
            content={<IndolenceContent />}
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: The Indolence of the Filipinos</h3>
                <ul className="space-y-3">
                  <li>Published in La Solidaridad in five parts (July-September 1890).</li>
                  <li>Refuted the Spanish stereotype that Filipinos were inherently lazy.</li>
                  <li>Argued that any observed "indolence" was a result of Spanish colonial policies and practices.</li>
                  <li>Provided historical evidence of pre-colonial Filipino industry and commerce.</li>
                  <li>Highlighted how various colonial practices (forced labor, exploitation, poor education) undermined Filipino productivity.</li>
                  <li>Emphasized that climate was not a determining factor for "indolence" as even Europeans in tropical regions could be productive.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Historical Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="mb-4">"The Indolence of the Filipinos" challenged a deeply entrenched colonial stereotype that was used to justify Spanish dominance. By showing that any perceived laziness was actually a result of colonial policies, Rizal shifted the blame from the Filipino people to their oppressors.</p>
                    <p>This essay was particularly significant because the stereotype of the "lazy native" was common across many colonial contexts, not just in the Philippines. By methodically dismantling this myth, Rizal provided a framework that could be applied in other colonized regions.</p>
                  </div>
                  <div className="historical-card">
                    <h4 className="font-semibold mb-2">Continued Relevance</h4>
                    <p>The essay continues to be relevant today in discussions about historical injustices, cultural stereotypes, and post-colonial identity in the Philippines and beyond.</p>
                    <img
                      src="/colonial-farming.jpg"
                      alt="Filipino farmers during colonial period"
                      className="rounded-lg w-full h-auto mt-3 historical-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Colonial+Farming";
                      }}
                    />
                  </div>
                </div>
              </div>
            }
          />
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Book className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold text-gray-900">Lesson 1 (Continued)</h2>
            <Separator className="flex-1" />
          </div>

          <LessonContent
            title="Letter to the Young Women of Malolos"
            content={
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                  <img
                    src="/malolos-women.jpg"
                    alt="Young Women of Malolos"
                    className="rounded-lg shadow-md w-full md:w-1/3 h-auto mb-4 md:mb-0 historical-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Women+of+Malolos";
                    }}
                  />
                  <div>
                    <p className="mb-4">Jose Rizal wrote this letter in response to Marcelo H. del Pilar's request, praising the courage of 20 young women from Malolos, Bulacan, who sought to open a school to learn Spanish despite opposition from a Spanish priest. In this letter, Rizal advocated for women's right to education and emphasized their vital role in shaping a strong, moral, and patriotic society.</p>
                  </div>
                </div>

                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Key Points Rizal Emphasized</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="historical-card">
                      <h4 className="font-semibold mb-2">Support for Equal Education</h4>
                      <p>Rizal believed women deserved the same educational opportunities as men, challenging the traditional view that women belonged only in domestic roles.</p>
                    </div>

                    <div className="historical-card">
                      <h4 className="font-semibold mb-2">Critique of the Clergy</h4>
                      <p>He condemned local priests for not representing true Christian values.</p>
                    </div>

                    <div className="historical-card">
                      <h4 className="font-semibold mb-2">Encouragement of Critical Thinking</h4>
                      <p>People, including women, should think for themselves and not blindly follow authority.</p>
                    </div>

                    <div className="historical-card">
                      <h4 className="font-semibold mb-2">Role of Mothers</h4>
                      <p>Mothers should teach their children love for God, country, and fellowmen, and instill strong values.</p>
                    </div>

                    <div className="historical-card">
                      <h4 className="font-semibold mb-2">Influence on Society</h4>
                      <p>Women, especially mothers, should help build a better nation by raising good citizens and setting moral standards.</p>
                    </div>

                    <div className="historical-card">
                      <h4 className="font-semibold mb-2">Qualities of Ideal Women</h4>
                      <p>Filipino women should be noble, dignified, and strong, yet also loving and gentle.</p>
                    </div>

                    <div className="historical-card">
                      <h4 className="font-semibold mb-2">Self-Education and Moral Living</h4>
                      <p>Young women should pursue education, live with good values, and choose life partners wisely.</p>
                    </div>
                  </div>
                </section>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: Letter to the Young Women of Malolos</h3>
                <ul className="space-y-3">
                  <li>Written on February 22, 1889, while Rizal was in London.</li>
                  <li>Originally written in Tagalog to ensure it could be widely read by Filipino women.</li>
                  <li>Praised the 20 young women of Malolos for their courage in demanding education despite opposition.</li>
                  <li>Advanced ideas about women's equality and education that were progressive for the time.</li>
                  <li>Highlighted the crucial role of women, especially mothers, in nation-building.</li>
                  <li>Challenged women to develop critical thinking and not blindly follow authority figures.</li>
                  <li>Emphasized the need for careful selection of life partners based on moral character.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Historical Context and Impact</h3>
                <p className="mb-4">The letter was a response to an incident in 1888 when twenty young women from Malolos, Bulacan, petitioned the Governor-General to allow them to open a night school where they could learn Spanish, despite opposition from the local parish priest. Their brave act caught the attention of Marcelo H. del Pilar, who asked Rizal to write them a letter of commendation.</p>
                <p className="mb-4">In the male-dominated society of 19th-century Philippines, Rizal's advocacy for women's education and recognition of their important role in society was revolutionary. The letter helped to inspire a generation of educated Filipino women who later played crucial roles in the nationalist movement.</p>
                <p>Today, the letter remains an important historical document in the development of feminism in the Philippines and continues to inspire discussions about gender equality, education, and women's roles in society.</p>
              </div>
            }
          />
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Book className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold text-gray-900">Lesson 2</h2>
            <Separator className="flex-1" />
          </div>

          <LessonContent
            title="Jose Rizal and Philippine Nationalism: Bayani and Kabayanihan"
            content={
              <div className="space-y-6">
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">The concept of bayani vs the concept of 'hero'</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="historical-card">
                      <h4 className="text-xl font-semibold mb-4">Definition of "Hero" (Western Concept)</h4>
                      <p className="mb-2">According to the Merriam-Webster Dictionary, a hero is:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>A mythological or legendary figure with divine or supernatural abilities</li>
                        <li>An illustrious warrior</li>
                        <li>A person admired for noble qualities and achievements</li>
                        <li>Someone who shows great courage</li>
                      </ul>
                    </div>

                    <div className="historical-card">
                      <h4 className="text-xl font-semibold mb-4">Definition of "Bayani" (Filipino Concept)</h4>
                      <p className="mb-2">As cited from the UP Diksiyunaryong Filipino (2001) and other sources, a bayani is:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>A person of extraordinary courage and ability</li>
                        <li>Someone who does something noble or dakila</li>
                        <li>In mythology, one with god-like strength or bravery</li>
                        <li>Someone involved in bayanihan — working for the common good</li>
                        <li>A term rooted in bayan, which can mean town, people, nation, time of day, or even weather</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="historical-card">
                      <h4 className="text-xl font-semibold mb-4">Key Differences (Ocampo, 2016)</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>"Bayani" is richer in meaning than the Western "hero"</li>
                        <li>Bayani is linked to bayan — one's community or nation</li>
                        <li>Kabayanihan is doing something noble not for personal glory, but for the greater good of the people</li>
                      </ul>
                    </div>

                    <div className="historical-card">
                      <h4 className="text-xl font-semibold mb-4">Cultural Roots (Nolasco, 1997)</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>"Bayani" has Austronesian origins</li>
                        <li>Refers to warriors who protect their communities</li>
                        <li>Derivatives include: bajani, majani, bagani, bahani</li>
                      </ul>

                      <h4 className="text-xl font-semibold mb-4 mt-4">Indigenous Perspectives (Tiu, 2005)</h4>
                      <p className="mb-2">Some Indigenous Peoples (IPs), like the Mandaya of Davao, had hierarchies of bayani:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Great bagani (chief leader)</li>
                        <li>Manikad (junior warriors)</li>
                        <li>Maguyantok (foot soldiers)</li>
                        <li>Advised by elders called bawukan or matadong</li>
                      </ul>

                      <h4 className="text-xl font-semibold mb-4 mt-4">Folk Epics and Superhuman Bayani</h4>
                      <p className="mb-2">Examples of legendary Filipino bayani in folklore:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Lam-ang (Ilocano)</li>
                        <li>Kudaman (Palawan)</li>
                        <li>Tuwaang (Manobo)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Origins of Bayani and Kabayanihan</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="historical-card">
                      <h4 className="text-xl font-semibold mb-4">Bayani and Bayan Connection (Veneracion, 1998)</h4>
                      <p className="mb-2">Bayan has layered meanings:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>People in a community (taga-bayan)</li>
                        <li>The community itself (bayan ng...)</li>
                        <li>The nation (bayan kong Pilipinas)</li>
                      </ul>
                    </div>

                    <div className="historical-card">
                      <h4 className="text-xl font-semibold mb-4">Values Behind Kabayanihan</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Pakikipagkapwa – extending oneself for others</li>
                        <li>Pagdamay – empathy-driven help</li>
                        <li>Kawanggawa – acts of charity rooted in empathy, not for rewards</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="historical-card">
                      <h4 className="text-xl font-semibold mb-4">Pre-colonial Roots of Bayani (Salazar, 1997)</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Bayani existed in early Filipino barangays (independent communities).</li>
                        <li>A bayani was an ordinary person with extraordinary courage, serving others for the common good.</li>
                        <li>The bayani worked with the community, not above it, to maintain peace and order.</li>
                      </ul>
                    </div>

                    <div className="historical-card">
                      <h4 className="text-xl font-semibold mb-4">Kabayanihan and Bayanihan</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Kabayanihan comes from bayanihan, a pre-colonial practice of community cooperation.</li>
                        <li>Example: Collective effort in building houses for neighbors.</li>
                        <li>It reflected a voluntary, communal spirit of helping others without expecting anything in return.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Evolution of Bayani and Kabayanihan</h3>

                  <div className="historical-card mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4">
                        <h4 className="font-semibold mb-2">From pre-colonial community defenders to modern symbols of national service and sacrifice.</h4>
                      </div>

                      <div className="text-center p-4">
                        <h4 className="font-semibold mb-2">The meaning of bayani and kabayanihan evolved with Philippine history.</h4>
                      </div>

                      <div className="text-center p-4">
                        <h4 className="font-semibold mb-2">The essence remains: selfless service, courage, and commitment to the common good, but the context (from local communities to national movements) has broadened.</h4>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="historical-card">
                      <h4 className="text-xl font-semibold mb-4">Colonial Period</h4>
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Evolution of the Concept of Bayani</h5>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Shifted to mean martyrdom and sacrifice for the nation.</li>
                          <li>Bayani became a symbol of resistance against foreign oppression.</li>
                          <li>Dr. Jose Rizal became the most iconic bayani, whose execution inspired the Philippine Revolution against Spanish rule.</li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Colonial Powers and Timeline</h5>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Spain: 1521–1898 (377 years)</li>
                          <li>United States: 1898–1946 (48 years)</li>
                          <li>Japan: 1942–1945 (3 years)</li>
                          <li>Total colonization: 428 years (over four centuries)</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2">Evolution of Kabayanihan</h5>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Despite colonization, bayanihan (communal unity and cooperation) persisted.</li>
                          <li>Practicing kabayanihan became a form of resilience and silent resistance against oppressive foreign rule.</li>
                          <li>This collective heroism was reflected in revolutionary movements of the 19th and early 20th centuries.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="historical-card">
                      <h4 className="text-xl font-semibold mb-4">Post-Independence Period</h4>
                      <div className="mb-4">
                        <h5 className="font-semibold
