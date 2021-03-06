import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { EntityWithDescription } from 'core/shared/models/Description';
import DescriptionManager from 'core/shared/view/domain/BaseDescriptionManager/DescriptionManager';

import { addOrEditDescription } from 'store/descriptionAction';

interface ILocalProps {
  entityType: Extract<EntityWithDescription, 'dataset' | 'datasetVersion'>;
  entityId: string;
  datasetId: string;
  description: string;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      addOrEditDescription,
    },
    dispatch
  );
};

type AllProps = ILocalProps & ReturnType<typeof mapDispatchToProps>;

class DatasetEntityDescriptionManager extends React.PureComponent<AllProps> {
  public render() {
    return (
      <DescriptionManager
        description={this.props.description}
        entityType={this.props.entityType}
        entityId={this.props.entityId}
        isLoadingAccess={false}
        isReadOnly={false}
        onAddOrEditDescription={this.props.addOrEditDescription}
      />
    );
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(DatasetEntityDescriptionManager);
