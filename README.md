# E-Commerce – Next.js & React

Aplicação de e-commerce desenvolvida com Next.js e React, planejada para ser escalável, bem organizada e de fácil manutenção.
O projeto aplica Composition Patterns e Princípios SOLID, além de preparar a base para uma API própria.



<img width="1920" height="2656" alt="screencapture-localhost-3000-2025-09-29-18_29_48" src="https://github.com/user-attachments/assets/49b29a55-0895-4335-b86e-1f66df6647df" />




# Funcionalidades

Autenticação

Telas de Login e Cadastro (Register)

Integração com provedores externos (Google, GitHub)

Lógica desacoplada para permitir troca futura de serviço de autenticação


# Produtos

Página inicial com produtos em destaque

Lista por categorias e busca com filtros

Página de detalhes com informações, imagens e avaliações

Componente ProductSkeleton para placeholders durante carregamento


# Interface e UX

Componentes reutilizáveis (CustomButton, CustomInput, PageWrapper, etc.)

Layout responsivo com Tailwind CSS

Uso de utils (cn.ts) para mesclar classes de forma eficiente


Dados Mockados (fase atual)

Arquivos mocks com categorias, produtos e reviews

Facilita desenvolvimento e testes antes da API real

---

# Estrutura do Projeto

src/
  components/
    AsideFilters/
    BannerSection/
    CategorySection/
    CustomButton/
    CustomInput/
    Header/
    LoginForm/
    NewsletterSection/
    PageWrapper/
      PageWrapperRoot.tsx
      PageWrapperHeader.tsx
      PageWrapperContent.tsx
    ProductCard/
    ProductDetailsCard/
    ProductImages/
    ProductInfo/
    ProductReviews/
    ProductsSection/
    RegisterForm/
    Skeletons/
      ProductSkeleton.tsx
    StarsRating/
    ui/         # Elementos genéricos, ex.: slider, tabs

  helpers/      # Funções auxiliares: formatCurrency, requestApi, etc.
  interfaces/   # Tipagens: Category, Product, ProductDetails, Review
  mocks/        # Dados simulados: categories.ts, productsDetails.ts, productsReviews.ts
  lib/          # Utilidades internas
    utils/
      cn.ts     # Função cn() para merge de classes (clsx + tailwind-merge)

  pages/
    api/        # Endpoints Next.js (serão integrados à API real)
    login/
    products/
    register/
    index.tsx   # Página inicial
    _app.tsx
    _document.tsx

  services/     # Serviços (ex.: api.ts para chamadas)
  styles/       # Estilos globais


---

# Destaques de Engenharia

Composition Patterns

Páginas formadas pela composição de pequenos componentes independentes.

PageWrapper é um bom exemplo: Root, Header e Content se combinam para formar o layout.


# Princípios SOLID

Single Responsibility: cada componente tem uma única função clara.

Open/Closed: aberto para extensão, fechado para modificação.

Liskov Substitution: abstrações permitem substituição sem quebrar comportamento.

Interface Segregation: interfaces simples e específicas (Category.ts, Product.ts, etc.).

Dependency Inversion:

Serviços (ex.: requestApi.ts) não dependem de implementação fixa, podendo trocar fetch por axios sem alterar a arquitetura.



# Independência de Bibliotecas

Lógica de requisição isolada.

Fácil troca de bibliotecas de UI ou de requisições.


---

# 🛠️ Tecnologias

Next.js – renderização híbrida e roteamento automático

React – criação de interfaces

TypeScript – tipagem estática

Tailwind CSS – estilização ágil e responsiva



---

# 📄 Licença

Projeto open-source sob licença MIT.
Sinta-se livre para usar, adaptar e contribuir.
