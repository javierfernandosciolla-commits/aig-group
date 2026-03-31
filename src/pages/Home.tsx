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
            <div className="bg-gradient-to-br from-[#001f5c]/5 to-[#a4ff00]/10 p-8 rounded-lg border-2 border-[#001f5c]/20 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
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
              
              <div className="space-y-3 mt-auto">
                <a href="https://forms.gle/seuWhGkLRMjWucSY7" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-[#001f5c] hover:bg-[#001a47] text-white font-semibold py-3 rounded-lg transition-all">
                    Postularme como Chofer
                  </Button>
                </a>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">¿Querés sumarte al equipo? Envía tu CV o consulta directamente a:</p>
                  <a href="mailto:drivers@aiggroup.com.py?subject=Postulaci%C3%B3n%20-%20Driver" className="inline-flex items-center justify-center w-full gap-2 bg-[#a4ff00] hover:bg-[#8fdd00] text-[#001f5c] font-semibold py-2 px-4 rounded-lg transition-all">
                    📩 drivers@aiggroup.com.py
                  </a>
                </div>
              </div>
            </div>
            
            {/* AIG CLEANING Card */}
            <div className="bg-gradient-to-br from-[#a4ff00]/10 to-[#001f5c]/5 p-8 rounded-lg border-2 border-[#a4ff00]/30 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
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
              
              <div className="space-y-3 mt-auto">
                <a href="https://forms.gle/HT3zKpcAzv7WHDbT9" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-[#a4ff00] hover:bg-[#8fdd00] text-[#001f5c] font-semibold py-3 rounded-lg transition-all">
                    Postularme para Limpieza
                  </Button>
                </a>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">Buscamos personal de limpieza. Postulate enviando tus datos a:</p>
                  <a href="mailto:cleaning@aiggroup.com.py?subject=Postulaci%C3%B3n%20-%20Cleaning" className="inline-flex items-center justify-center w-full gap-2 bg-[#001f5c] hover:bg-[#001a47] text-[#a4ff00] font-semibold py-2 px-4 rounded-lg transition-all">
                    📩 cleaning@aiggroup.com.py
                  </a>
                </div>
              </div>
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
                    Infraestructura de respaldo y redundancia para garantizar operaciones sin interrupciones, con protocolos de seguridad y contingencia implementados.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663292592046/RH7S6A22Me7bVzdg5x5rD5/01Sync_5d3c1f5e.jpeg"
                alt="Infraestructura AIG"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="liderazgo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16">Liderazgo Ejecutivo</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#001f5c]/5 to-[#a4ff00]/10 p-8 rounded-lg border-2 border-[#001f5c]/20 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <img 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663292592046/RH7S6A22Me7bVzdg5x5rD5/CPNCARLOSATORRESCEOdeAIGSA_d0c5d7a7.png"
                    alt="C.P.N. Carlos A. Torres - CEO"
                    className="w-full max-w-sm rounded-lg shadow-md"
                  />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#001f5c] mb-2">C.P.N. Carlos A. Torres</h3>
                  <p className="text-lg font-semibold text-[#a4ff00] mb-6">Chief Executive Officer (CEO)</p>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Con más de 20 años de experiencia en gestión de comercio internacional y operaciones aduanales, el C.P.N. Carlos A. Torres lidera AIG S.A. con visión estratégica y compromiso con la excelencia operativa.
                  </p>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-[#a4ff00]">
                    <p className="text-sm text-gray-700"><strong>Especialización:</strong> Gestión de Comercio Internacional, Compliance Aduanal, Estrategia Corporativa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Cumplimiento y Gobernanza</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#001f5c]">
              <h3 className="text-lg font-bold text-[#001f5c] mb-4">✓ Regulación Aduanal</h3>
              <p className="text-gray-700 text-sm">
                Cumplimiento integral de normativas aduanales paraguayas e internacionales con supervisión continua.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#a4ff00]">
              <h3 className="text-lg font-bold text-[#001f5c] mb-4">✓ Transparencia Operativa</h3>
              <p className="text-gray-700 text-sm">
                Registros detallados y auditoría interna de todas las operaciones para garantizar trazabilidad.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#001f5c]">
              <h3 className="text-lg font-bold text-[#001f5c] mb-4">✓ Estabilidad Patrimonial</h3>
              <p className="text-gray-700 text-sm">
                Respaldo de activos propios y estructura financiera sólida para garantizar continuidad operativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paraguay Strategic Platform Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Paraguay como Plataforma Estratégica</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-[#a4ff00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#001f5c] mb-1">Ubicación Estratégica</h3>
                    <p className="text-gray-700 text-sm">Centro de Sudamérica con acceso a mercados regionales principales</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Users className="h-6 w-6 text-[#a4ff00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#001f5c] mb-1">Estabilidad Política</h3>
                    <p className="text-gray-700 text-sm">Ambiente regulatorio predecible y marco legal consolidado</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <TrendingUp className="h-6 w-6 text-[#a4ff00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#001f5c] mb-1">Oportunidades de Crecimiento</h3>
                    <p className="text-gray-700 text-sm">Mercado en expansión con potencial de integración regional</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663292592046/ZRGgfsMxOGMtoOch.jpg"
                alt="Vista Aérea de Asunción, Paraguay"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Contacto Comercial</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-[#a4ff00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#001f5c] mb-2">Ubicación</h3>
                  <p className="text-gray-700">Asunción, Paraguay</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-[#a4ff00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#001f5c] mb-2">Teléfono</h3>
                  <p className="text-gray-700">+595 (21) XXXX-XXXX</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-[#a4ff00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#001f5c] mb-2">Correo Electrónico</h3>
                  <p className="text-gray-700">info@aiggroup.com.py</p>
                </div>
              </div>
            </div>
            
            <form className="bg-white p-8 rounded-lg shadow-md border border-gray-200" action="https://formspree.io/f/xeepgwge" method="POST">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                  <input type="text" name="nombre" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#a4ff00]" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
                  <input type="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#a4ff00]" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                  <textarea name="mensaje" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#a4ff00]"></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-[#001f5c] hover:bg-[#001a47] text-white font-semibold py-3 rounded-lg transition-all">
                  Enviar Mensaje
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001f5c] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Arco Iris Group S.A.</h3>
              <p className="text-gray-300 text-sm">Plataforma integrada de gestión de comercio internacional con respaldo patrimonial y presencia estratégica en Paraguay.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#servicios" className="hover:text-[#a4ff00] transition">Servicios</a></li>
                <li><a href="#infraestructura" className="hover:text-[#a4ff00] transition">Infraestructura</a></li>
                <li><a href="#empleo" className="hover:text-[#a4ff00] transition">Empleo</a></li>
                <li><a href="#contacto" className="hover:text-[#a4ff00] transition">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contacto</h3>
              <p className="text-gray-300 text-sm mb-2">info@aiggroup.com.py</p>
              <p className="text-gray-300 text-sm">Asunción, Paraguay</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Arco Iris Group S.A. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
