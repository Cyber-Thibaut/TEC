---
name: Suggestion de Tuto
about: Proposition d'ajout de tuto
title: "[AJOUT] Ajout de tuto"
labels: ajout, enhancement
assignees: Cyber-Thibaut

---

body:
  - type: markdown
    attributes:
      value: |
        # Suggestion de page pour le Wiki
  - type: input
    id: title
    attributes:
      label: Titre de l'article
      description: Quel sera le titre de cet article ?
      placeholder: ex. "La HypeSquad Events"
    validations:
      required: true
  - type: textarea
    id: description
    attributes:
      label: Description de l'article
      description: En quoi consiste cet article ?
      placeholder: ex. "Cet article parlera de la HypeSquad Events, en quoi elle consiste, ..."      
    validations:
      required: true
  - type: checkboxes
    id: validation
    attributes:
      label: Avant de valider
      options:
        - label: J'ai bien vérifié que l'article n'existait pas déjà, ou n'a pas déjà été suggéré.
          required: true
        - label: J'ai bien lu et accepté les règles de contribution du Wiki.
          required: true
