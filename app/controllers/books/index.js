import Ember from 'ember';
import groupBy from 'ember-group-by';

export function dropDownFixPosition(button, dropdown)
{
  console.log(button, dropdown);
  var dropDownTop = button.offset().top + button.outerHeight();
  dropdown.css('top', dropDownTop + "px");
  dropdown.css('left', button.offset().left + "px");
}

export default Ember.Controller.extend(
  {
    booksByType: groupBy('model', 'type'),

    sampleData: [
      {
        label: 'Nature',
        content: [
          {
            id: 1,
            title: 'This title will appear on select 1'
          },
          {
            id: 2,
            title: 'This title will appear on selec 2'
          }
        ]
      },
      {
        label: 'Another category',
        content: [
          {
            id: 3,
            title: 'This title will appear on select 3'
          },
          {
            id: 4,
            title: 'This title will appear on select 4'
          }
        ]
      }
    ],

    sampleDataOptional: [
      {
        id: 1,
        category: 'Nature',
        title: 'This title will appear on select 1'
      },
      {
        id: 2,
        category: 'Nature',
        title: 'This title will appear on select 2'
      },
      {
        id: 3,
        category: 'Another category',
        title: 'This title will appear on select 3'
      }
    ],

    actions: {
      abc: function ()
      {
        dropDownFixPosition(Ember.$('button'), Ember.$('.dropdown-menu'));
      }
    }
  });
