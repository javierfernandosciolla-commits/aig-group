import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Globe, Shield, TrendingUp, Users, Building2, MapPin, Phone, Mail, CheckCircle2, Truck, Sparkles } from "lucide-react";
import { useState } from "react";

/**
 * Landing Page - Arco Iris Group S.A.
 * Empresa importadora y gestora de comercio internacional radicada en Paraguay
 * 
 * Design Philosophy:
 * - Professional institutional design reflecting corporate solidity
 * - Navy blue (#001f5c) primary with lime green accents (#a4ff00)
 * - Playfair Display for headings, Poppins for body text
 * - Clear hierarchical structure with strategic whitespace
 * - Integration of Paraguay identity and regional context
 */

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: "Gestión de Comercio Internacional",
      description: "Coordinación estructurada de importaciones y exportaciones con supervisión regulatoria completa.",
      features: ["Mitigación de riesgos", "Transparencia operativa", "Control de procesos", "Eficiencia en ejecución"]
    },
    {
      icon: Shield,
      title: "Estructura Aduanera Interna",
      description: "Capacidad integrada en materia aduanera para garantizar precisión documental y cumplimiento normativo.",
      features: ["Supervisión de procedimientos", "Precisión documental", "Cumplimiento normativo", "Optimización de tiempos"]
    },
    {
      icon: TrendingUp,
      title: "Soporte Contable y Asesoramiento",
      description: "Coordinación financiera integrada alineada con operaciones de comercio internacional.",
      features: ["Transparencia financiera", "Consistencia regulatoria", "Planificación estructurada", "Crecimiento sostenible"]
    },
    {
      icon: Building2,
      title: "Infraestructura Corporativa",
      description: "Activos propios en el centro financiero de Asunción para respaldar operaciones internacionales.",
      features: ["Departamentos equipados", "Movilidad corporativa", "Continuidad operativa", "Inversión regional"]
    }
  ];

  const values = [
    { title: "Integridad y Transparencia", icon: "✓" },
    { title: "Disciplina Regulatoria", icon: "✓" },
    { title: "Pensamiento Estratégico", icon: "✓" },
    { title: "Relaciones de Largo Plazo", icon: "✓" },
    { title: "Estabilidad con Respaldo Patrimonial", icon: "✓" },
    { title: "Crecimiento Regional Sostenible", icon: "✓" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663292592046/RH7S6A22Me7bVzdg5x5rD5/LOGOPNG_e74cf406.png" 
              alt="AIG Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-[#001f5c]">Arco Iris Group</p>
              <p className="text-xs text-gray-600">Comercio Internacional</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#servicios" className="text-sm font-medium text-gray-700 hover:text-[#001f5c] transition">Servicios</a>
            <a href="#infraestructura" className="text-sm font-medium text-gray-700 hover:text-[#001f5c] transition">Infraestructura</a>
            <a href="#liderazgo" className="text-sm font-medium text-gray-700 hover:text-[#001f5c] transition">Liderazgo</a>
            <a href="#empleo" className="text-sm font-medium text-gray-700 hover:text-[#001f5c] transition">Sumate a nuestro equipo</a>
            <a href="#contacto" className="text-sm font-medium text-gray-700 hover:text-[#001f5c] transition">Contacto</a>
          </div>
          <Button className="bg-[#001f5c] hover:bg-[#001a47] text-white">
            Asociarse
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-0">
        <div className="absolute inset-0">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663292592046/RH7S6A22Me7bVzdg5x5rD5/imagenPortada_bef555ee.png"
            alt="Paraguay Commerce"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f5c]/80 to-[#001f5c]/40"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-white mb-6 leading-tight">
              Plataforma Paraguaya de Gestión de Comercio Internacional
            </h1>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed">
              AIG S.A. coordina operaciones estructuradas de importación y exportación con supervisión regulatoria integrada, respaldo patrimonial propio y presencia estratégica en Asunción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#a4ff00] text-[#001f5c] hover:bg-[#8fdd00] font-semibold">
                Conocer Más <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#001f5c] text-white p-10 rounded-lg shadow-lg">
              <h2 className="text-white mb-4">🎯 Misión</h2>
              <p className="text-gray-100 leading-relaxed">
                Proveer soluciones estructuradas de gestión de comercio internacional mediante una plataforma integrada que combina experiencia aduanera interna, soporte contable y activos corporativos estratégicos, garantizando eficiencia operativa, cumplimiento normativo y estabilidad a largo plazo.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#a4ff00] to-[#8fdd00] text-[#001f5c] p-10 rounded-lg shadow-lg">
              <h2 className="text-[#001f5c] mb-4">🌎 Visión</h2>
              <p className="text-[#001f5c] leading-relaxed font-medium">
                Consolidar a AIG S.A. como una plataforma regional líder en gestión de comercio internacional, reconocida por sus estándares de gobernanza, estructura integrada y respaldo patrimonial, facilitando la expansión estratégica en Sudamérica.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="bg-white p-12 rounded-lg border border-gray-200">
            <h2 className="text-center mb-12">🧭 Valores Corporativos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 hover:bg-gray-50 rounded-lg transition">
                  <CheckCircle2 className="h-6 w-6 text-[#a4ff00] flex-shrink-0 mt-1" />
                  <span className="font-medium text-gray-800">{value.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Servicios Integrados</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones completas de comercio internacional con estructura interna, supervisión regulatoria y respaldo corporativo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={idx}
                  className="border-gray-200 hover:shadow-lg transition cursor-pointer overflow-hidden"
                  onMouseEnter={() => setActiveService(idx)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <CardHeader className="bg-gradient-to-r from-[#001f5c]/5 to-[#a4ff00]/5">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-[#001f5c]">{service.title}</CardTitle>
                        <CardDescription className="mt-2">{service.description}</CardDescription>
                      </div>
                      <Icon className="h-8 w-8 text-[#a4ff00] flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="h-1.5 w-1.5 bg-[#a4ff00] rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Employment Section */}
      <section id="empleo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Sumate a Nuestro Equipo</h2>
          <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto text-lg">
            Arco Iris Group está en expansión. Buscamos profesionales comprometidos para fortalecer nuestras nuevas divisiones de logística y servicios.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AIG DRIVERS Card */}
            <div className="bg-gradient-to-br from-[#001f5c]/5 to-[#a4ff00]/10 p-8 rounded-lg border-2 border-[#001f5c]/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 bg-[#001f5c] rounded-lg mb-6 mx-auto">
                <Truck className="h-8 w-8 text-[#a4ff00]" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#001f5c] text-center mb-4">AIG DRIVERS</h3>
              
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Buscamos conductores profesionales y responsables para nuestra división de logística corporativa.
              </p>
              
              <div className="bg-white p-4 rounded-lg mb-6 border border-[#a4ff00]/30">
                <p className="text-sm text-gray-700 font-semibold mb-2">📋 Requisitos:</p>
                <p className="text-sm text-gray-600">Licencia vigente y conocimiento de zona Central</p>
              </div>
              
              <a href="https://forms.gle/seuWhGkLRMjWucSY7" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-[#001f5c] hover:bg-[#001a47] text-white font-semibold py-3 rounded-lg transition-all">
                  Postularme como Chofer
                </Button>
              </a>
            </div>
            
            {/* AIG CLEANING Card */}
            <div className="bg-gradient-to-br from-[#a4ff00]/10 to-[#001f5c]/5 p-8 rounded-lg border-2 border-[#a4ff00]/30 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 bg-[#a4ff00] rounded-lg mb-6 mx-auto">
                <Sparkles className="h-8 w-8 text-[#001f5c]" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#001f5c] text-center mb-4">AIG CLEANING</h3>
              
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Formá parte de nuestra nueva división de limpieza integral para oficinas y residencias. Buscamos personal detallista con ganas de crecer.
              </p>
              
              <div className="bg-white p-4 rounded-lg mb-6 border border-[#a4ff00]/30">
                <p className="text-sm text-gray-700 font-semibold mb-2">✨ Perfil Buscado:</p>
                <p className="text-sm text-gray-600">Personal detallista, responsable y con ganas de crecer profesionalmente</p>
              </div>
              
              <a href="https://forms.gle/HT3zKpcAzv7WHDbT9" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-[#a4ff00] hover:bg-[#8fdd00] text-[#001f5c] font-semibold py-3 rounded-lg transition-all">
                  Postularme para Limpieza
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infraestructura" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Infraestructura Corporativa en Asunción</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-[#a4ff00] shadow-sm">
                  <h3 className="text-lg font-bold text-[#001f5c] mb-2">Departamentos Ejecutivos</h3>
                  <p className="text-gray-700">
                    Unidades residenciales completamente equipadas ubicadas estratégicamente en el distrito financiero de Asunción, diseñadas para alojar ejecutivos y socios comerciales internacionales.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-[#00d9ff] shadow-sm">
                  <h3 className="text-lg font-bold text-[#001f5c] mb-2">Movilidad Corporativa</h3>
                  <p className="text-gray-700">
                    Servicios de transporte y logística disponibles para ejecutivos internacionales que requieran soporte estructurado durante su estadía operativa en Paraguay.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-[#ff3366] shadow-sm">
                  <h3 className="text-lg font-bold text-[#001f5c] mb-2">Continuidad Operativa</h3>
                  <p className="text-gray-700">
                    Estos activos refuerzan la continuidad operativa y reflejan nuestra inversión de largo plazo en la región como plataforma estratégica.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663292592046/RH7S6A22Me7bVzdg5x5rD5/01Sync.jpeg"
                alt="Sync Building - AIG Infrastructure"
                className="rounded-lg shadow-lg w-full object-cover h-96"
              />
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663292592046/RH7S6A22Me7bVzdg5x5rD5/01Syncaereo.jpeg"
                alt="Aerial View - Sync Building"
                className="rounded-lg shadow-lg w-full object-cover h-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="liderazgo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Liderazgo Ejecutivo</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663292592046/RH7S6A22Me7bVzdg5x5rD5/CPNCARLOSATORRESCEOdeAIGSA_ddd4fb15.png"
                alt="Carlos Atorres - CEO"
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <div className="mt-6 bg-gradient-to-r from-[#001f5c] to-[#001a47] text-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-sm font-semibold text-[#a4ff00] mb-2">MAXIMA AUTORIDAD</p>
                <h3 className="text-xl font-bold">C.E.O. C.P.N. Carlos A. Torres</h3>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#001f5c] mb-2">Dirección Estratégica</h3>
                <p className="text-gray-700 leading-relaxed">
                  AIG S.A. está dirigida por profesionales con experiencia comprobada en estructuración de comercio internacional, supervisión regulatoria, coordinación financiera y administración de activos corporativos.
                </p>
              </div>
              
              <div className="bg-[#001f5c]/5 p-6 rounded-lg border border-[#a4ff00]/30">
                <h4 className="font-bold text-[#001f5c] mb-3">Enfoque de Liderazgo</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#a4ff00] rounded-full"></span>
                    Crecimiento institucional sostenible
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#a4ff00] rounded-full"></span>
                    Consolidación regional estratégica
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#a4ff00] rounded-full"></span>
                    Relaciones comerciales de largo plazo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gradient-to-r from-[#001f5c] to-[#001a47] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">🔐 Cumplimiento y Gobernanza</h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              AIG S.A. opera bajo el marco legal de la República del Paraguay y cumple con normativas nacionales e internacionales en materia de comercio exterior, regulación aduanera y transparencia financiera.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Shield className="h-8 w-8 text-[#a4ff00] mx-auto mb-3" />
                <h3 className="font-bold mb-2">Control Normativo</h3>
                <p className="text-sm text-gray-200">Supervisión integral de procesos y cumplimiento regulatorio</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Globe className="h-8 w-8 text-[#a4ff00] mx-auto mb-3" />
                <h3 className="font-bold mb-2">Gobernanza Responsable</h3>
                <p className="text-sm text-gray-200">Gestión disciplinada de riesgos y transparencia operativa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paraguay Strategic Position */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">🌍 Paraguay: Plataforma Estratégica</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Paraguay representa un entorno competitivo y estable para la estructuración de operaciones de comercio internacional. AIG S.A. aprovecha esta posición estratégica para facilitar iniciativas de expansión regional y consolidación comercial en Sudamérica.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gradient-to-br from-[#001f5c]/10 to-[#a4ff00]/10 p-8 rounded-lg">
                <MapPin className="h-10 w-10 text-[#001f5c] mx-auto mb-4" />
                <h3 className="font-bold text-[#001f5c] mb-2">Ubicación Estratégica</h3>
                <p className="text-sm text-gray-700">Centro de Sudamérica con acceso a mercados regionales</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#001f5c]/10 to-[#a4ff00]/10 p-8 rounded-lg">
                <TrendingUp className="h-10 w-10 text-[#001f5c] mx-auto mb-4" />
                <h3 className="font-bold text-[#001f5c] mb-2">Estabilidad Económica</h3>
                <p className="text-sm text-gray-700">Entorno regulatorio predecible y seguro</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#001f5c]/10 to-[#a4ff00]/10 p-8 rounded-lg">
                <Users className="h-10 w-10 text-[#001f5c] mx-auto mb-4" />
                <h3 className="font-bold text-[#001f5c] mb-2">Talento Local</h3>
                <p className="text-sm text-gray-700">Profesionales especializados en comercio internacional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#001f5c] via-[#001f5c] to-[#a4ff00]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-white mb-6">Estructure sus Operaciones Regionales con Confianza</h2>
            <p className="text-lg text-gray-100 mb-8">
              Asóciese con AIG S.A. y establezca una presencia estructurada, regulada y estratégicamente respaldada en Paraguay y Sudamérica.
            </p>
            <Button className="bg-[#a4ff00] text-[#001f5c] hover:bg-[#8fdd00] font-semibold text-lg px-8 py-6">
              Iniciar Conversación <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section id="empleo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Sumate a Nuestro Equipo</h2>
          <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto text-lg">
            Arco Iris Group está en expansión. Buscamos profesionales comprometidos para fortalecer nuestras nuevas divisiones de logística y servicios.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AIG DRIVERS Card */}
            <div className="bg-gradient-to-br from-[#001f5c]/5 to-[#a4ff00]/10 p-8 rounded-lg border-2 border-[#001f5c]/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 bg-[#001f5c] rounded-lg mb-6 mx-auto">
                <Truck className="h-8 w-8 text-[#a4ff00]" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#001f5c] text-center mb-4">AIG DRIVERS</h3>
              
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Buscamos conductores profesionales y responsables para nuestra división de logística corporativa.
              </p>
              
              <div className="bg-white p-4 rounded-lg mb-6 border border-[#a4ff00]/30">
                <p className="text-sm text-gray-700 font-semibold mb-2">📋 Requisitos:</p>
                <p className="text-sm text-gray-600">Licencia vigente y conocimiento de zona Central</p>
              </div>
              
              <a href="https://forms.gle/seuWhGkLRMjWucSY7" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-[#001f5c] hover:bg-[#001a47] text-white font-semibold py-3 rounded-lg transition-all">
                  Postularme como Chofer
                </Button>
              </a>
            </div>
            
            {/* AIG CLEANING Card */}
            <div className="bg-gradient-to-br from-[#a4ff00]/10 to-[#001f5c]/5 p-8 rounded-lg border-2 border-[#a4ff00]/30 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 bg-[#a4ff00] rounded-lg mb-6 mx-auto">
                <Sparkles className="h-8 w-8 text-[#001f5c]" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#001f5c] text-center mb-4">AIG CLEANING</h3>
              
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Formá parte de nuestra nueva división de limpieza integral para oficinas y residencias. Buscamos personal detallista con ganas de crecer.
              </p>
              
              <div className="bg-white p-4 rounded-lg mb-6 border border-[#a4ff00]/30">
                <p className="text-sm text-gray-700 font-semibold mb-2">✨ Perfil Buscado:</p>
                <p className="text-sm text-gray-600">Personal detallista, responsable y con ganas de crecer profesionalmente</p>
              </div>
              
              <a href="https://forms.gle/HT3zKpcAzv7WHDbT9" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-[#a4ff00] hover:bg-[#8fdd00] text-[#001f5c] font-semibold py-3 rounded-lg transition-all">
                  Postularme para Limpieza
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Contacto Comercial</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#001f5c] mb-2">Datos Legales</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Razón Social:</strong> Arco Iris Group S.A.</p>
                  <p><strong>País de Constitución:</strong> República del Paraguay</p>
                  <p><strong>RUC:</strong> 80129345</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#001f5c] mb-2">Ubicación</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Dirección Legal:</strong></p>
                  <p>Calle Nanawa entre Tte. Cnel. Ramos Alfaro e Ingaji</p>
                  <p><strong>Ciudad Base:</strong> Asunción, Paraguay</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#001f5c] mb-4 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#a4ff00]" />
                  Contacto Directo
                </h3>
                <div className="space-y-3">
                  <a href="tel:+595992287990" className="flex items-center gap-2 text-[#001f5c] hover:text-[#a4ff00] transition font-medium">
                    <span>+595 992 287990</span>
                  </a>
                  <p className="text-xs text-gray-600">Disponible para consultas comerciales</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg border-2 border-[#a4ff00] shadow-lg">
              <h3 className="font-bold text-[#001f5c] mb-6 text-lg">Solicitar Información</h3>
              <form action="https://formspree.io/f/xeepgwge" method="POST" className="space-y-4" onSubmit={(e) => {
                const formData = new FormData(e.currentTarget);
                formData.append('_subject', 'Nuevo contacto desde la Web AIG SA');
                formData.append('_to', 'javierfernandosciolla@gmail.com');
              }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo *</label>
                  <input 
                    type="text" 
                    name="nombre" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4ff00] focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4ff00] focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input 
                    type="tel" 
                    name="telefono"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4ff00] focus:border-transparent"
                    placeholder="+595 9XX XXXXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Asunto *</label>
                  <input 
                    type="text" 
                    name="asunto" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4ff00] focus:border-transparent"
                    placeholder="Consulta sobre servicios"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                  <textarea 
                    name="mensaje" 
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4ff00] focus:border-transparent resize-none"
                    placeholder="Cuéntanos sobre tu consulta..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#001f5c] hover:bg-[#001a47] text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Enviar Consulta
                </button>
                
                <p className="text-xs text-gray-600 text-center">
                  Responderemos tu consulta dentro de 24 horas hábiles
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001f5c] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663292592046/RH7S6A22Me7bVzdg5x5rD5/LOGOPNG_e74cf406.png" 
                  alt="AIG Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-sm text-gray-300">
                Plataforma paraguaya de gestión de comercio internacional
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicios" className="text-gray-300 hover:text-[#a4ff00] transition">Servicios</a></li>
                <li><a href="#infraestructura" className="text-gray-300 hover:text-[#a4ff00] transition">Infraestructura</a></li>
                <li><a href="#liderazgo" className="text-gray-300 hover:text-[#a4ff00] transition">Liderazgo</a></li>
                <li><a href="#contacto" className="text-gray-300 hover:text-[#a4ff00] transition">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Información Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><p className="text-gray-300">RUC: 80129345</p></li>
                <li><p className="text-gray-300">Asunción, Paraguay</p></li>
                <li><p className="text-gray-300">+595 992 287990</p></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm text-gray-400">
              © 2026 Arco Iris Group S.A. Todos los derechos reservados. | Gestión de Comercio Internacional desde Paraguay
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
