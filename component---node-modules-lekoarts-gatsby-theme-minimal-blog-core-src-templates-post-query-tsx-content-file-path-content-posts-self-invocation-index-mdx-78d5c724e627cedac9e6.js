"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[565],{4765:function(e,n,t){t.d(n,{F:function(){return u},Z:function(){return E}});var l=t(7294),a=t(8733),r=t(795),c=t(1521),o=t(6799),i=t(8871);var s=e=>{let{post:n}=e;return null};const p=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var m=e=>{let{data:{post:n},children:t}=e;return(0,a.tZ)(c.Z,null,(0,a.tZ)(r.X6,{as:"h1",variant:"styles.h1"},n.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,n.date),n.tags&&(0,a.tZ)(l.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:n.tags})),n.timeToRead&&" — ",n.timeToRead&&(0,a.tZ)("span",null,n.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:p.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},t),(0,a.tZ)(s,{post:n}))};const u=e=>{var n,t,l;let{data:{post:r}}=e;return(0,a.tZ)(i.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(n=r.banner)||void 0===n||null===(t=n.childImageSharp)||void 0===t||null===(l=t.resize)||void 0===l?void 0:l.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function E(e){let{...n}=e;return l.createElement(m,n)}},6799:function(e,n,t){var l=t(8733),a=t(7294),r=t(1883),c=t(3494),o=t(9706);n.Z=e=>{let{tags:n}=e;const{tagsPath:t,basePath:i}=(0,c.Z)();return(0,l.tZ)(a.Fragment,null,n.map(((e,n)=>(0,l.tZ)(a.Fragment,{key:e.slug},!!n&&", ",(0,l.tZ)(r.Link,{sx:e=>{var n;return{...null===(n=e.styles)||void 0===n?void 0:n.a}},to:(0,o.Z)("/"+i+"/"+t+"/"+e.slug)},e.name)))))}},8871:function(e,n,t){var l=t(7294),a=t(1883),r=t(4232);n.Z=e=>{let{title:n="",description:t="",pathname:c="",image:o="",children:i=null,canonicalUrl:s=""}=e;const p=(0,r.Z)(),{siteTitle:m,siteTitleAlt:u,siteUrl:E,siteDescription:g,siteImage:v,author:d,siteLanguage:f}=p,y={title:n?n+" | "+m:u,description:t||g,url:""+E+(c||""),image:""+E+(o||v)};return l.createElement(l.Fragment,null,l.createElement("html",{lang:f}),l.createElement("title",null,y.title),l.createElement("meta",{name:"description",content:y.description}),l.createElement("meta",{name:"image",content:y.image}),l.createElement("meta",{property:"og:title",content:y.title}),l.createElement("meta",{property:"og:url",content:y.url}),l.createElement("meta",{property:"og:description",content:y.description}),l.createElement("meta",{property:"og:image",content:y.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:y.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:y.title}),l.createElement("meta",{name:"twitter:url",content:y.url}),l.createElement("meta",{name:"twitter:description",content:y.description}),l.createElement("meta",{name:"twitter:image",content:y.image}),l.createElement("meta",{name:"twitter:image:alt",content:y.description}),l.createElement("meta",{name:"twitter:creator",content:d}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),s?l.createElement("link",{rel:"canonical",href:s}):null,i)}},5551:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return i}});var l=t(7294),a=t(1151);function r(e){const n=Object.assign({h3:"h3",hr:"hr",h4:"h4",p:"p",ol:"ol",li:"li",h5:"h5",pre:"pre",code:"code",em:"em",strong:"strong",span:"span",ul:"ul",a:"a"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h3,null,"Spring AOP 와 Self-Invocation 의 관계"),"\n",l.createElement(n.hr),"\n",l.createElement(n.h4,null,"들어가기에 앞서"),"\n",l.createElement(n.p,null,"Self-Invocation 은 Spring AOP 동작 방식과 밀접한 연관이 있고, Spring AOP 는 보통 Cache, Transaction 을 사용할 때, 이용하게 된다.",l.createElement("br"),"\n대표적인 두 사례에서 발생하는 Self-invocation 에 대해서 알아보고, 이 문제가 발생하는 이유를 Spring AOP 의 동작 방식을 통해 이해해보고,\n이를 해결하기 위한 방법들에 대해 알아보자."),"\n",l.createElement(n.hr),"\n",l.createElement(n.h4,null,"Our Goals"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Self-invocation 의 발생 원인 이해"),"\n",l.createElement(n.li,null,"해결 방안"),"\n"),"\n",l.createElement(n.hr),"\n",l.createElement(n.h4,null,"1. 발생 예시 - Transaction"),"\n",l.createElement("br"),"\n",l.createElement(n.h5,null,"예제 코드"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-java"},"@Service\npublic class SelfInvocationService {\n    public SelfInvocationService(SelfInvocationRepository selfInvocationRepository) {\n        this.selfInvocationRepository = selfInvocationRepository;\n    }\n\n    private final SelfInvocationRepository selfInvocationRepository;\n\n    public void callApplyTransaction() {\n        applyTransaction();\n    }\n\n    @Transactional\n    public void applyTransaction() {\n        SelfInvocation selfInvocation = new SelfInvocation();\n        selfInvocationRepository.save(selfInvocation);\n\n        System.out.println(selfInvocation.getId());\n    }\n}\n")),"\n",l.createElement("br"),"\n",l.createElement(n.h5,null,"테스트 코드"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-java"},"@SpringBootTest\nclass SelfInvocationApplicationTests {\n    @Autowired\n    private SelfInvocationService selfInvocationService;\n\n    @Test\n    void transaction_self_invocation_test() {\n        selfInvocationService.callApplyTransaction();\n        selfInvocationService.applyTransaction();\n    }\n}\n")),"\n",l.createElement(n.h5,null,"결과"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"DEBUG 45279 --- [    Test worker] o.s.orm.jpa.JpaTransactionManager        : Creating new transaction with name [org.springframework.data.jpa.repository.support.SimpleJpaRepository.save]: PROPAGATION_REQUIRED,ISOLATION_DEFAULT\nDEBUG 45279 --- [    Test worker] o.s.orm.jpa.JpaTransactionManager        : Creating new transaction with name [com.self.invocation.SelfInvocationService.applyTransaction]: PROPAGATION_REQUIRED,ISOLATION_DEFAULT\n")),"\n",l.createElement(n.p,null,"분명 이러한 코드를 실행하였을 때, 기대하는 결과는 ",l.createElement(n.code,null,"applyTransaction")," 메서드에서 새로운 ",l.createElement(n.em,null,l.createElement(n.strong,null,"Transaction"))," 이 만들어지는 것이다.\n하지만 결과에는 ",l.createElement(n.em,null,l.createElement(n.strong,null,"Self Invocation"))," 상황인 ",l.createElement(n.code,null,"callApplyTransaction")," 메서드를 실행하면 ",l.createElement(n.code,null,"SimpleJpaRepository.save")," 메서드에서 ",l.createElement(n.em,null,l.createElement(n.strong,null,"Transaction"))," 이 생성 된 것으로 나왔고,\n직접 ",l.createElement(n.code,null,"applyTransaction")," 메서드를 호출하면 기대하던 결과와 같이 ",l.createElement(n.code,null,"applyTransaction")," 메서드에서 ",l.createElement(n.em,null,l.createElement(n.strong,null,"Transaction"))," 이 생성되는 것을 확인할 수 있다."),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"2. 발생 예시 - Cache"),"\n",l.createElement(n.p,null,"Cache 의 경우에도 위의 Transaction 사례와 비슷한 문제가 발생한다."),"\n",l.createElement("br"),"\n",l.createElement(n.h5,null,"예제 코드"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-java"},'@Service\npublic class SelfInvocationService {\n    public SelfInvocationService(SelfInvocationRepository selfInvocationRepository) {\n        this.selfInvocationRepository = selfInvocationRepository;\n    }\n    \n    public void callApplyCache() {\n        applyCache();\n    }\n\n    @Cacheable(cacheNames = "example")\n    public String applyCache() {\n        String caching = "caching";\n        System.out.println("--- processing ---");\n        return caching;\n    }\n}\n')),"\n",l.createElement("br"),"\n",l.createElement(n.h5,null,"테스트 코드"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-java"},"@SpringBootTest\nclass SelfInvocationApplicationTests {\n    @Autowired\n    private SelfInvocationService selfInvocationService;\n\n    @Test\n        void cache_self_invocation_test() {\n            selfInvocationService.applyCache();\n            selfInvocationService.applyCache();\n            selfInvocationService.callApplyCache();\n        }\n}\n\n")),"\n",l.createElement(n.h5,null,"결과"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"--- processing ---\n--- processing ---\n")),"\n",l.createElement(n.p,null,"여기서도 원하는 결과는 ",l.createElement(n.code,null,"applyCache")," 에서 출력하는 ",l.createElement(n.code,null,"--- processing ---")," 이 한번만 나타나는 것이다. 하지만 결과에는 두 번 나오게 되었다.\n이는 ",l.createElement(n.em,null,l.createElement(n.strong,null,"Self Invcation"))," 상황인 ",l.createElement(n.code,null,"callApplyCache")," 메서드를 호출하였을 때, ",l.createElement(n.em,null,l.createElement(n.strong,null,"Cache"))," 가 동작하지 않기 때문이다. ",l.createElement("br"),"\n왜 의도한 대로 결과가 나오지 않는 것일까? 답은 ",l.createElement(n.strong,null,"프록시"),"를 기반으로 하는 ",l.createElement(n.em,null,l.createElement(n.strong,null,"Spring AOP"))," 의 동작 방식과 관련에 있다."),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"3. 원인"),"\n",l.createElement(n.p,null,"위의 두 사례에서 ",l.createElement(n.strong,null,"Spring AOP")," 의 동작에 의해 메소드 호출 시 ",l.createElement(n.strong,null,"프록시")," 객체가 ",l.createElement(n.em,null,l.createElement(n.strong,null,"Transaction"))," 과 ",l.createElement(n.em,null,l.createElement(n.strong,null,"Cache"))," 에 맞는 부가적인 기능을\n해당 메서드 호출 전 앞 뒤에 실행하게 되는데, 이 때 해당 메서드를 호출하는 주체는 ",l.createElement(n.strong,null,"프록시")," 객체이지만, 그 안에서 다시 호출되는 메서드의 주체는 그 메서드를 갖고 있는\n객체가 된다."),"\n",l.createElement(n.p,null,l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 30.41666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABcRAAAXEQHKJvM/AAAB4ElEQVR42j2R70sTARyHvzukbSAGvhAzaG0qnZY48UUWNoPMjcJeJLmfweZyHkudITFWL+6FZL6xF9VO6iqq4ciLsFBKfFO+WbsDt2WpWDi5BQVG+Aes7hOr8AMfnvfPQwTo6N90/088D6bEg2cnbrWPSDv22Mu8/fq8arsiqSZbVG2/cEOtOzGqUpVTpWqXSjUulap61T31QZXcU5n6HiEb9dzNWre3VlsURemUZfnU1lq6bfDmi4URUYEjNvfLEZ2FbSgJA8thb1MYVq+ARs89sE4BrEvAEZ+IfSd5kFf8tDE8uw3/o9Vvqcz6+9yHFWU5k5NzKx/lV6/f/eQnEjDUBX/rajwaVbs1nTmgMbWXtDPjS1r4eUHjkptaf+KzFpIKmtV/XyPfw43vsTc78D/58qN7Mt3mfZA/1H07bU4BxnJrZKaMvQx9A1fUN3AlgrH0gTEHcJpfRN/jdYSfriEi5RGSvsLqF0HOuHK8J54Ve4VMZ8lbB/+2rItPVRYAo57lnpFlADpzoMjUBkH7fTA5xmG/NgfvVBah5CZc8Sxa+xM4NjiDA11jIKLdKLsxiPi/rDw6Ol3RehXlzUPFipYIDI0cmtx34Jpcwjl+HufHFtAxPA3G4geZLsJ4eAB/AC9Q6TMlFYmFAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Proxy"\n        title=""\n        src="/static/c33d34ee76dd05e034b62b8d7d4dce51/7d769/proxy1.png"\n        srcset="/static/c33d34ee76dd05e034b62b8d7d4dce51/5243c/proxy1.png 240w,\n/static/c33d34ee76dd05e034b62b8d7d4dce51/ab158/proxy1.png 480w,\n/static/c33d34ee76dd05e034b62b8d7d4dce51/7d769/proxy1.png 960w,\n/static/c33d34ee76dd05e034b62b8d7d4dce51/c8452/proxy1.png 1284w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n위의 그림을 보면 ",l.createElement(n.code,null,"BusinessI.ready")," 를 call 하면 프록시 객체를 참조하게 되어 ",l.createElement(n.code,null,"$Proxy.ready")," 가 call 되고 그 다음 다시 ",l.createElement(n.code,null,"BusinessI"),"\n타겟 객체를 참조하게 되는 것을 알 수 있다. 그 다음 ",l.createElement(n.code,null,"BusinessI.ready")," 에서 call 하는 ",l.createElement(n.code,null,"BusinessI.go")," 메서드는 ",l.createElement(n.code,null,"BusinessI")," 에 의한 것이다."),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"4. 해결 방안"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"AopContext 로 프록시 적용"),"\n",l.createElement(n.li,null,"Self Injection"),"\n",l.createElement(n.li,null,"AspectJ Weaving"),"\n"),"\n",l.createElement(n.p,null,"이렇게 세 가지가 있는데, 본 글에서는 간단하게 적용할 수 있는 ",l.createElement(n.strong,null,"Self Injection")," 과 ",l.createElement(n.strong,null,"AopContext")," 를 이용하는 사례만 알아보고\nAspectJ Weaving 에 대해서는 자세하게 다루는 글을 따로 작성하려고 한다."),"\n",l.createElement(n.h5,null,"4.1. AopContext 로 프록시 적용"),"\n",l.createElement(n.p,null,l.createElement(n.em,null,"Spring AOP")," 에서는 해당 객체를 감싸고 있는 프록시 객체를 반환하는 ",l.createElement(n.strong,null,"AopContext")," 의 ",l.createElement(n.code,null,"currentProxy()")," 메서드를 제공하고 있는데\n이를 이용하는 방식이다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-java"},"@Service\npublic class SelfInvocationService {\n    public SelfInvocationService(SelfInvocationRepository selfInvocationRepository) {\n        this.selfInvocationRepository = selfInvocationRepository;\n    }\n\n    private final SelfInvocationRepository selfInvocationRepository;\n\n    public void callApplyTransaction() {\n\n        //applyTransaction();\n\n        ((SelfInvocationService) AopContext.currentProxy()).applyTransaction();\n    }\n\n    @Transactional\n    public void applyTransaction() {\n        SelfInvocation selfInvocation = new SelfInvocation();\n        selfInvocationRepository.save(selfInvocation);\n    }\n}\n")),"\n",l.createElement(n.p,null,"이렇게 하게 되면 ",l.createElement(n.code,null,"callApplyTransaction")," 를 호출 할 때 ",l.createElement(n.code,null,"applyTransaction")," 도 프록시 객체로 실행되게 된다.\n하지만 이 방법은 expose-proxy 옵션을 true 로 설정해주어야 한다.\n이 설정을 하기 위해서는 XML 을 이용하는 방법, ProxyFactory 객체의 ExposeProxy 옵션을 설정해 주는 것, ",l.createElement(n.strong,null,"Annotation")," 을 활용하는 방법이 있는데\n본 글에서는 Spring Boot 환경을 사용하므로 간단하게 Annotation 을 사용하는 방법만 살펴 보려고 한다."),"\n",l.createElement(n.p,null,"설정 방법은 아래와 같다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-java"},"@EnableAspectJAutoProxy(exposeProxy = true)\n@Configuration\npublic class AspectJConfig {\n\n}\n")),"\n",l.createElement("br"),"\n",l.createElement(n.h5,null,"4.2. Self Injection"),"\n",l.createElement(n.p,null,"Bean Container 에서 ",l.createElement(n.code,null,"SelfInvcationService")," 자신을 다시 주입 받아, 해당 메서드를 호출하는 방식이다.\n이때 주의할 점은 생성자 주입 방식이 아닌 ",l.createElement(n.code,null,"@Autowired")," ",l.createElement(n.strong,null,"Annotation")," 을 통해 주입 받아야 한다는 점이다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-java"},"@Service\npublic class SelfInvocationService {\n    public SelfInvocationService(SelfInvocationRepository selfInvocationRepository) {\n        this.selfInvocationRepository = selfInvocationRepository;\n    }\n\n    private final SelfInvocationRepository selfInvocationRepository;\n\n    @Autowired\n    private SelfInvocationService self;\n\n    public void callApplyTransaction() {\n\n//        applyTransaction();\n\n//        ((SelfInvocationService) AopContext.currentProxy()).applyTransaction();\n        self.applyTransaction();\n    }\n\n    @Transactional\n    public void applyTransaction() {\n        SelfInvocation selfInvocation = new SelfInvocation();\n        selfInvocationRepository.save(selfInvocation);\n    }\n}\n")),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"마치며"),"\n",l.createElement(n.p,null,"본 글에서는 Spring AOP 를 이용하며 발생할 수 있는 Self Invocation 문제에 대해 알아보았다.\n그리고 몇 가지 해결 방법들을 알아보았는데, 가장 좋은 해결 방법은 Self Invocation 상황이 발생하지 않게 좋은 구조로 코드를 작성하는 것이라고 생각한다."),"\n",l.createElement("br"),"\n",l.createElement(n.h4,null,"참고"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://docs.spring.io/spring-framework/reference/core/aop/proxying.html"},"Spring Docs - Proxying Mechanisms")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://gmoon92.github.io/spring/aop/2019/04/01/spring-aop-mechanism-with-self-invocation.html"},"Moon 님 블로그 - Self Invocation은 왜 발생할까?")),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},o=t(4765);function i(e){return l.createElement(o.Z,e,l.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-self-invocation-index-mdx-78d5c724e627cedac9e6.js.map