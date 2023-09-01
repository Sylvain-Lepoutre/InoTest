# Breadcrumb (Fil d'Ariane)

Le fil d'Ariane est un composant qui permet d'indiquer à l'utilisateur où il se situe sur l'arborescence du site, il permet de revenir en arrière sur les différentes étapes de sa navigation.

Le composant est générique, il n'utilise, de base, aucune bibiliothèque React.

Il est composé de 4 sous-composant :

- Breadcrumb.tsx
- SegmentList.tsx
- Segment-tsx
- Link.tsx

Ils doivent être utilisés ainsi

```
  <Breadcrumb>
    <Breadcrumb.SegmentList>
      <Breadcrumb.Segment>
        <Breadcrumb.Link></Breadcrumb.Link>
      </Breadcrumb.Segment>
      <Breadcrumb.Segment>
        <Breadcrumb.Link></Breadcrumb.Link>
      </Breadcrumb.Segment>
      <Breadcrumb.Segment>
        <Breadcrumb.Link></Breadcrumb.Link>
      </Breadcrumb.Segment>
    </Breadcrumb.SegmentList>
  </Breadcrumb>
```

## Breadcrumb

- Il faut utiliser une prop `aria-label="Vous êtes ici"` ou une autre chaine de caractère selon votre utilisation.
- La prop `separator` doit indiquer le type de séparateur que vous souhaitez, en chaîne de caractère. `separator="/"` ou `separator="-"` par exemple.

## SegmentList

- Il est possible d'indiquer dans une prop `separator`, un type de séparateur comme dans l'élément Breadcrum, le composant prendra en priorité celui indiqué ici si il y'en a un.

## Segment

- Il est possible d'indiquer dans une prop `separator`, un type de séparateur comme dans l'élément Breadcrum, le composant prendra en priorité celui indiqué ici si il y'en a un.

Avec une bonne utilisation, les rôles et propriétés ARIA sont parfaitement remplis.
